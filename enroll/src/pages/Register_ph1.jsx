import { Header } from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { Terms_And_Conditions } from '../components/forms/Registration_Terms_And_Conditions';
import { useState } from 'react';
import { Otp_Modal } from '../components/modals/Otp_Modal';
import { supabase } from '../supabaseClient';
import emailjs from 'emailjs-com';
import { HasAccount } from '../components/modals/HasAccount';

export const Register_ph1 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [showHasAccount, setShowHasAccount] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    suffix: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtpToEmail = (email, otpCode) => {
    emailjs
      .send(
        'service_dqnfkgj',
        'template_nb9e4to',
        { to_email: email, otp_code: otpCode },
        '9gSnrINVUn_cu5Wr9'
      )
      .then((result) => {
        console.log('OTP sent:', result.text);
      })
      .catch((error) => {
        console.error('Failed to send OTP:', error.text);
      });
  };

  const validateForm = () => {
    let errors = {};
    // Name validation - no numbers
    const nameRegex = /^[A-Za-z\s'-]+$/;
    if (!formData.lastName.trim()) errors.lastName = 'Last Name is required';
    else if (!nameRegex.test(formData.lastName))
      errors.lastName = 'No numbers allowed in Last Name';
    if (!formData.firstName.trim()) errors.firstName = 'First Name is required';
    else if (!nameRegex.test(formData.firstName))
      errors.firstName = 'No numbers allowed in First Name';
    if (formData.middleName && !nameRegex.test(formData.middleName))
      errors.middleName = 'No numbers allowed in Middle Name';

    // Birthdate validation - age restriction 12 <= age <= 100
    if (!formData.birthDate.trim()) {
      errors.birthDate = 'Birthdate is required';
    } else {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 12) errors.birthDate = 'Must be at least 12 years old';
      if (age > 100) errors.birthDate = 'Age cannot exceed 100 years';
    }

    // Basic email check (HTML5 type=email will already help, but for manual validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!emailRegex.test(formData.email))
      errors.email = 'Invalid email address';

    // Password validation
    const password = formData.password;
    if (!password) errors.password = 'Password is required';
    else {
      if (password.length < 8)
        errors.password = 'At least 8 characters required';
      else if (!/[A-Z]/.test(password))
        errors.password = 'At least one uppercase letter required';
      else if (!/[a-z]/.test(password))
        errors.password = 'At least one lowercase letter required';
      else if (!/[0-9]/.test(password))
        errors.password = 'At least one number required';
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
        errors.password = 'At least one special character required';
    }

    if (!formData.confirmPassword)
      errors.confirmPassword = 'Confirm Password is required';
    else if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', formData.email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      setErrorMessages((prev) => ({
        ...prev,
        email: 'Error validating email. Please try again.',
      }));
      return;
    }

    if (existingUser) {
      setShowHasAccount(true);
      return;
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(newOtp);
    sendOtpToEmail(formData.email, newOtp);
    setShowOTP(true);
  };

  const resendOtp = (email) => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(newOtp);
    sendOtpToEmail(email, newOtp);
  };

  return (
    <>
      <Header />
      <HasAccount
        show={showHasAccount}
        onClose={() => setShowHasAccount(false)}
      />

      <div className="mainContent">
        <div className="registerBackground">
          <Terms_And_Conditions show={show} onHide={() => setShow(false)} />
          <Otp_Modal
            showOTPbox={showOTP}
            onBack={() => setShowOTP(false)}
            expectedOtp={otp}
            userData={formData}
            onSuccess={() => {
              setShowOTP(false);
            }}
            onResendOtp={resendOtp}
          />
          <div className="registrationBox">
            <Link className="back" to="/">
              <i className="fa fa-chevron-left backButton" aria-hidden="true" />
              Back
            </Link>

            <div>
              <h2>User Registration</h2>
              <p>Register to access the enrollment system</p>
              <form onSubmit={handleNext}>
                <div className="registrationFullName">
                  <div className="inputGroup1">
                    <label>Last Name*</label>
                    <input
                      name="lastName"
                      className="name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errorMessages.lastName && (
                      <p className="error">{errorMessages.lastName}</p>
                    )}
                  </div>
                  <div className="inputGroup1">
                    <label>First Name*</label>
                    <input
                      name="firstName"
                      className="name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errorMessages.firstName && (
                      <p className="error">{errorMessages.firstName}</p>
                    )}
                  </div>
                  <div className="inputGroup1">
                    <label>Middle Name</label>
                    <input
                      name="middleName"
                      className="name"
                      value={formData.middleName}
                      onChange={handleInputChange}
                    />
                    {errorMessages.middleName && (
                      <p className="error">{errorMessages.middleName}</p>
                    )}
                  </div>
                  <div className="inputGroup1">
                    <label>Suffix</label>
                    <input
                      type="text"
                      name="suffix"
                      className="suffix"
                      value={formData.suffix}
                      onChange={handleInputChange}
                    />
                    {errorMessages.suffix && (
                      <p className="error">{errorMessages.suffix}</p>
                    )}
                  </div>
                </div>
                <div className="registrationInput2">
                  <div className="inputGroup2">
                    <label>Birthdate*</label>
                    <input
                      type="date"
                      name="birthDate"
                      className="birthdate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                    />
                    {errorMessages.birthDate && (
                      <p className="error">{errorMessages.birthDate}</p>
                    )}
                  </div>
                  <div className="inputGroup2">
                    <label>Email*</label>
                    <input
                      type="email"
                      name="email"
                      className="registrationEmail"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errorMessages.email && (
                      <p className="error">{errorMessages.email}</p>
                    )}
                  </div>
                </div>
                <div className="registrationInput3">
                  <div className="inputGroup3" style={{ position: 'relative' }}>
                    <label>Password*</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errorMessages.password && (
                      <p className="error">{errorMessages.password}</p>
                    )}
                    <ion-icon
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '40px',
                        transform: 'translateY(-20%)',
                        cursor: 'pointer',
                        userSelect: 'none',
                        fontSize: '22px',
                        color: '#999',
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  <div className="inputGroup3"></div>
                  <div className="inputGroup3" style={{ position: 'relative' }}>
                    <label>Confirm Password*</label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    {errorMessages.confirmPassword && (
                      <p className="error">{errorMessages.confirmPassword}</p>
                    )}
                    <ion-icon
                      name={
                        showConfirmPassword ? 'eye-off-outline' : 'eye-outline'
                      }
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '40px',
                        transform: 'translateY(-20%)',
                        cursor: 'pointer',
                        userSelect: 'none',
                        fontSize: '22px',
                        color: '#999',
                      }}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  </div>
                </div>
                <div className="button1">
                  <button className="registrationPh1_Next" type="submit">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
