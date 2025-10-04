import { useState } from 'react';
import './otp_modal.css';
import { Verified_Box } from './Verified';

export const Otp_Modal = ({ showOTPbox, onBack }) => {

    const [showVerifiedBox,setShowVerifiedBox] = useState(false);
    if (!showOTPbox) return null;

    return (
        <>
        <Verified_Box showVerifiedBox={showVerifiedBox} />
        <div className='otp-modal-overlay'>
            <div className="otpBox">
                <div className="back">
                    <i className="fa fa-chevron-left backButton" aria-hidden="true" onClick={onBack}/>
                    <a onClick={onBack}>Back</a>
                </div>
                <div>
                    <h2>Email Verification</h2>
                    <p>Enter the 4-digit code that was sent to your email.</p>
                </div>
                <div className="otp_Input">
                    <input type="" />
                    <input type="" />
                    <input type="" />
                    <input type="" />
                </div>
                <div className="verifyButton">
                    <button>Verify</button>      
                </div>
                <a onClick={() => setShowVerifiedBox(true)} style={{fontSize:"8px",color:"red", cursor:"pointer", textDecoration:"underline"}}> click me open to verified box/notif </a>      
                <p>Didn't receive code? <a>Resend</a></p>
            </div>
        </div>
        </>
    );
};
