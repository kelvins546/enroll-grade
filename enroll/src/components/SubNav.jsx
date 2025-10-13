import { useLocation } from "react-router-dom";
import "./navigationbar.css";

export const Sub_Nav = ({ activeSection, onSectionChange }) => {
  const location = useLocation(); 
  const path = location.pathname.toLowerCase();

  let sections = [];

  if (path === "/dashboard") {
    sections = [
      { id: "enrollmentOverview", label: "Enrollment Overview" },
      { id: "studentDistribution", label: "Student Distribution" },
      { id: "facultyAssignment", label: "Faculty Assignment" },
      { id: "gradingSummary", label: "Grading Summary" },
    ];
  } 
  else if (path === "/admin-enrollment") {
    sections = [
      { id: "pendingApplications", label: "Pending Applications" },
      { id: "approvedStudents", label: "Approved Students" },
      { id: "rejectedApplications", label: "Rejected Applications" },
    ];
  } 
  else {
    
    return null;
  }

  return (
    <div className="dashboard-sub-nav">
      {sections.map(({ id, label }) => (
        <span
          key={id}
          className={`sub-nav-item ${activeSection === id ? "active" : ""}`}
          onClick={() => onSectionChange(id)}
        >
          {label}
        </span>
      ))}
    </div>
  );
};
