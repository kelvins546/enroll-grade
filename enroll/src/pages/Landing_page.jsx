import { useState } from "react";
import './landing_page.css';
import { Header } from '../components/Header';
import { Footer } from "../components/Footer";
import { Link } from 'react-router-dom';

export const Landing_page = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        
        <Header />
        <div className="content">
            <div className="landing_page" style={{ 
            backgroundImage: `linear-gradient(rgba(41, 112, 60, 0.5), rgba(41, 112, 60, 0.5)), url("/school.png")` 
        }}>
                <div className="container">
                    <div className="mission_Vision">
                    <div className="titleName">
                        <h2>Student Enrollment and Grading Access System</h2>
                    </div>
                    <div className='mission'>
                        <h2>Mission</h2>
                        <p>
                        To protect the right of every Filipino to quality, equitable, culture-based, and complete basic education where: Students learn in a child-friendly, gender sensitive, and safe and motivating environment.
                        </p>
                    </div>
                    <div className='vision'>
                        <h2>Vision</h2>
                        <p>
                        We dream of Filipinos who passionately love their country and whose competencies and values enable them to realize their full potential and contribute meaningfully to building the nation. As a learner-centered public institution, the Benigno Aquino Jr. High School continuously improves itself to better service its stakeholders.
                        </p>
                    </div>
                </div>
                    <div className='login_Form'>
                        <h2>User Authentication</h2>
                        <div className='login_Form_Box'>
                            
                            <div className="input_Box">
                            <input name="email" required />
                            <label>ID</label>
                            </div>

                            <div className="input_Box">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                required 
                            />
                            <img
                                src={showPassword ? "images/open_eye.png" : "images/closed_eye.png"}
                                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                                alt="toggle password"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                            <label>Password</label>
                            </div>

                            <div className="passoption">
                            <p><a>Forgot Password?</a></p>
                            </div>
                            
                            <button type="submit" className="btn">Login</button>
                            <div className="enroll">
                            <p>Are you an applicant/enrollee? 
                                <Link to='/Register_ph1'>
                                <strong> Apply/Enroll here.</strong>
                                </Link>
                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}