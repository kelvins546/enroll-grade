import { useState } from 'react';
import './landing_page.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useSession } from '../context/SessionContext';

export const Landing_page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setSession } = useSession();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Try by email first
    let { data, error: loginError } = await supabase
      .from('users')
      .select('*')
      .eq('email', form.id)
      .eq('password_hash', form.password)
      .single();

    // If not found by email, try by applicant_id
    if (!data) {
      const applicantRes = await supabase
        .from('users')
        .select('*')
        .eq('applicant_id', form.id)
        .eq('password_hash', form.password)
        .single();
      data = applicantRes.data;
      loginError = applicantRes.error;
    }

    // If not found by applicant_id, try by student_id
    if (!data) {
      const studentRes = await supabase
        .from('users')
        .select('*')
        .eq('student_id', form.id)
        .eq('password_hash', form.password)
        .single();
      data = studentRes.data;
      loginError = studentRes.error;
    }

    if (loginError || !data) {
      setError('Invalid login credentials.');
      return;
    }

    setSession(data.user_id, data.role);

    // Route based on the detected database role
    switch (data.role) {
      case 'applicant':
        navigate('/Applicant_Homepage');
        break;
      case 'student':
        navigate('/Student_Homepage');
        break;
      case 'adviser':
      case 'teacher':
        navigate('/Teacher_Homepage');
        break;
      case 'dept_head':
        navigate('/DeptHead_Dashboard');
        break;
      case 'principal':
        navigate('/Dashboard');
        break;
      case 'super_admin':
        navigate('/Admin_Dashboard');
        break;
      default:
        setError('Unknown user role.');
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="content">
        <div
          className="landing_page"
          style={{
            backgroundImage:
              'linear-gradient(rgba(41, 112, 60, 0.5), rgba(41, 112, 60, 0.5)), url("/school.png")',
          }}
        >
          <div className="container">
            <div className="mission_Vision">
              <div className="titleName">
                <h2>Student Enrollment and Grading Access System</h2>
              </div>
              <div className="mission">
                <h2>Mission</h2>
                <p>
                  To protect the right of every Filipino to quality, equitable,
                  culture-based, and complete basic education where: Students
                  learn in a child-friendly, gender sensitive, and safe and
                  motivating environment.
                </p>
              </div>
              <div className="vision">
                <h2>Vision</h2>
                <p>
                  We dream of Filipinos who passionately love their country and
                  whose competencies and values enable them to realize their
                  full potential and contribute meaningfully to building the
                  nation. As a learner-centered public institution, the Benigno
                  Aquino Jr. High School continuously improves itself to better
                  service its stakeholders.
                </p>
              </div>
            </div>
            <div className="login_Form">
              <h2>User Authentication</h2>
              <div className="login_Form_Box">
                <form onSubmit={handleLogin}>
                  <div className="input_Box">
                    <input
                      name="id"
                      value={form.id}
                      onChange={handleInputChange}
                      required
                    />
                    <label>Applicant ID / Student ID / Email</label>
                  </div>
                  <div className="input_Box">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      required
                    />
                    <img
                      src={
                        showPassword
                          ? 'images/open_eye.png'
                          : 'images/closed_eye.png'
                      }
                      style={{
                        width: '25px',
                        height: '25px',
                        cursor: 'pointer',
                      }}
                      alt="toggle password"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    <label>Password</label>
                  </div>
                  {error && <div className="error">{error}</div>}
                  <div className="passoption">
                    <p>
                      <a>Forgot Password?</a>
                    </p>
                  </div>
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <div className="enroll">
                    <p>
                      Are you an applicant/enrollee?
                      <Link to="/Register_ph1">
                        <strong> Apply/Enroll here.</strong>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
