import { Header } from "../components/Header";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './register.css'
import { Terms_And_Conditions } from "../components/forms/Registration_Terms_And_Conditions";
import { useState } from "react";
import { Otp_Modal } from "../components/modals/Otp_Modal";
import { supabase } from "../supabaseClient";



export const Register_ph1 = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [showOTP, setShowOTP] = useState(false);

    return (
        <>
        <Header />
        <div className="mainContent">
            <div className="registerBackground">
                <Terms_And_Conditions show={show} onHide={() => setShow(false)}/>
                <Otp_Modal showOTPbox={showOTP} onBack={() => setShowOTP(false)} />
                <div className="registrationBox">
                    <Link className="back" to = '/'>
                    <i className="fa fa-chevron-left backButton" aria-hidden="true" /><a>Back</a>
                    </Link>
                    <div>
                        <div>
                            <h2>User Registration</h2>
                            <p>Register to access the enrollment system</p>
                        </div>
                        <div>
                            <div className="registrationFullName">
                                <div className="inputGroup1">
                                    <label>Last Name</label>
                                    <input className="name"/>
                                </div>
                                <div className="inputGroup1">
                                    <label>First Name</label>
                                    <input className="name"/>
                                </div>
                                <div className="inputGroup1">
                                    <label>Middle Name</label>
                                    <input className="name" />
                                </div>
                                <div className="inputGroup1">
                                    <label>Suffix</label>
                                    <input type="text" className="suffix"/>
                                </div>
                            </div>

                            <div className="registrationInput2">
                                <div className="inputGroup2">
                                    <label>Birthdate</label>
                                    <input type="date" className="birthdate"/>
                                </div>
                                <div className="inputGroup2">
                                    <label>Email</label>
                                    <input type="email" className="registrationEmail"/>
                                </div>
                            </div>

                        <div class="registrationInput3">
                                
                                <div class="inputGroup3">
                                    <label>Password</label>
                                    <input type="password" />
                                </div>

                                <div class="inputGroup3"></div> 

                                <div class="inputGroup3">
                                    <label>Confirm Password</label>
                                    <input type="password" />
                                </div>

                            </div>
                            <div class="button1">
                                    <button class="registrationPh1_Next">Next</button>
                            </div>
                            <a onClick={() => setShowOTP(true)} style={{color:"red", cursor:"pointer", textDecoration:"underline"}}> click me to open otpbox </a>      
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};