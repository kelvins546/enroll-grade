import { useState, useRef } from 'react';
import './otp_modal.css';
import { Verified_Box } from './Verified';
import { supabase } from '../../supabaseClient';
import emailjs from 'emailjs-com';

export const Otp_Modal = ({
  showOTPbox,
  onBack,
  expectedOtp,
  userData,
  onSuccess,
  onResendOtp,
}) => {
  const [showVerifiedBox, setShowVerifiedBox] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  if (!showOTPbox) return null;

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);
      if (val && index < inputRefs.length - 1)
        inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return dateString.split('T')[0];
  };

  const handleVerify = async () => {
    setErrorMessage('');
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      setErrorMessage('Please enter the full 4-digit code.');
      return;
    }
    if (enteredOtp !== expectedOtp) {
      setErrorMessage('Incorrect OTP code. Please try again.');
      return;
    }

    const registrationObject = {
      last_name: userData.lastName || '',
      first_name: userData.firstName || '',
      middle_name: userData.middleName || null,
      suffix: userData.suffix || null,
      date_of_birth: formatDate(userData.birthDate) || '',
      email: userData.email || '',
      password_hash: userData.password || '',
      role: 'applicant',
    };

    const { data, error } = await supabase
      .from('users')
      .insert([registrationObject])
      .select('user_id');

    if (error) {
      setErrorMessage('Failed to register user. Please try again.');
      console.log(error, registrationObject);
      return;
    }

    const userID = data?.[0]?.user_id;
    if (userID) {
      const year = new Date().getFullYear();
      const applicantID = `${year}${String(userID).padStart(4, '0')}`;
      await supabase
        .from('users')
        .update({ applicant_id: applicantID })
        .eq('user_id', userID);
      emailjs.send(
        'service_dqnfkgj',
        'template_47kkp3p',
        { to_email: userData.email, applicant_id: applicantID },
        '9gSnrINVUn_cu5Wr9'
      );
    }
    setShowVerifiedBox(true);
    setTimeout(() => {
      if (onSuccess) onSuccess();
    }, 1500000);
  };

  const handleResend = () => {
    if (onResendOtp) onResendOtp(userData.email);
    setOtp(['', '', '', '']);
    setErrorMessage('A new OTP has been sent to your email.');
  };

  return (
    <>
      <Verified_Box showVerifiedBox={showVerifiedBox} />
      <div className="otp-modal-overlay">
        <div className="otpBox">
          <div className="back">
            <i
              className="fa fa-chevron-left backButton"
              aria-hidden="true"
              onClick={onBack}
            />
            <a onClick={onBack}>Back</a>
          </div>
          <div>
            <h2>Email Verification</h2>
            <p>Enter the 4-digit code that was sent to your email.</p>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
          <div className="otp_Input">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={inputRefs[index]}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputMode="numeric"
                pattern="[0-9]*"
                autoFocus={index === 0}
              />
            ))}
          </div>
          <div className="verifyButton">
            <button onClick={handleVerify}>Verify</button>
          </div>
          <p>
            Didn't receive code?{' '}
            <a onClick={handleResend} style={{ cursor: 'pointer' }}>
              Resend
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
