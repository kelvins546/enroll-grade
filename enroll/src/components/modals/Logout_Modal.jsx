import './logout_modal.css'
import { useEffect } from 'react'

export const Logout_Modal = ({ show, onClose, onConfirm }) => {
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="logout-box-overlay">
      <div className="logout-modal-box">
        <div className="title">
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to log out?</p>
        </div>
        <div className="logout-box-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
