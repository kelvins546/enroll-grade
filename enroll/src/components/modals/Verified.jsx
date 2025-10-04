import './verified.css';
import { Navigate } from 'react-router-dom';
export const Verified_Box = ({showVerifiedBox}) => {
    if(!showVerifiedBox) return null;

    return (
        <div className='verified-box-overlay'>
            <div className="verifiedBox">
                <div className='img' style={{paddingTop:"10px"}}>
                    <img src="checkImg.png" alt="Bagong Pilipinas Logo" />
                </div>
                    <h2>Verification Successful</h2>
                    <p>Please proceed to login.</p>
                    <button>Login</button>
                </div>
        </div>
    )
}