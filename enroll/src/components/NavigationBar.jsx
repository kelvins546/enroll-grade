import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigationbar.css';

export const Navigation_Bar = ({ userRole }) => {
  const navigate = useNavigate();

  if (userRole === 'student') {
    return (
      <div className="navigation-bar">
        <span className="nav-item">Enrollment</span>
        <span className="nav-item">Schedule</span>
        <span className="nav-item">Grades</span>
      </div>
    );
  }

  if (userRole === 'applicant') {
    return (
      <div className="navigation-bar">
        <span
          className="nav-item"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/applicant_homepage')}
        >
          Home
        </span>
      </div>
    );
  }

  if (userRole === 'teacher') {
    return (
      <div className="navigation-bar">
        <span className="nav-item">Classes</span>
        <span className="nav-item">Grading</span>
        <span className="nav-item">Evaluation</span>
        <span className="nav-item">Class schedule</span>
      </div>
    );
  }

  if (userRole === 'admin') {
    return (
      <div className="navigation-bar">
        <span className="nav-item">Dashboard</span>
        <span className="nav-item">Enrollment</span>
        <span className="nav-item">Placement</span>
        <span className="nav-item">Scheduling</span>
        <span className="nav-item">Grades</span>
        <span className="nav-item">Manage</span>
      </div>
    );
  }

  return null;
};
