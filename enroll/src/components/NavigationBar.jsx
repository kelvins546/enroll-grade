import { NavLink } from 'react-router-dom';
import './navigationbar.css';

export const Navigation_Bar = ({
  userRole,
  activeSection,
  onSectionChange,
}) => {
  if (userRole === 'student') {
    return (
      <div className="nav-bar">
        <div className="navigation-bar">
          <span className="nav-item">Enrollment</span>
          <span className="nav-item">Schedule</span>
          <span className="nav-item">Grades</span>
        </div>
      </div>
    );
  }

  if (userRole === 'applicant') {
    return (
      <div className="nav-bar">
        <div className="navigation-bar">
          <span className="nav-item">Home</span>
        </div>
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

  if (userRole === 'super_admin') {
    return (
      <>
        <div className="nav-bar">
          <div className="navigation-bar">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/Analytics"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Analytics
            </NavLink>
            <NavLink
              to="/Admin-Enrollment"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Enrollment
            </NavLink>
            <NavLink
              to="/Placement"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Placement
            </NavLink>
            <NavLink
              to="/Scheduling"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Scheduling
            </NavLink>
            <NavLink
              to="/Admin-Grades"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Grades
            </NavLink>
            <NavLink
              to="/Manage"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Manage
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  if (userRole === 'admin' || userRole === 'principal') {
    return (
      <>
        <div className="nav-bar">
          <div className="navigation-bar">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/Analytics"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Analytics
            </NavLink>
            <NavLink
              to="/Admin-Enrollment"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Enrollment
            </NavLink>
            <NavLink
              to="/Placement"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Placement
            </NavLink>
            <NavLink
              to="/Scheduling"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Scheduling
            </NavLink>
            <NavLink
              to="/Admin-Grades"
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              style={{ textDecoration: 'none' }}
            >
              Grades
            </NavLink>
          </div>
        </div>
      </>
    );
  }

  return null;
};
