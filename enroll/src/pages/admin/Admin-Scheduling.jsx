import { Header } from '../../components/Header';
import { Navigation_Bar } from '../../components/NavigationBar';
import './admin_scheduling.css';
import { Scheduling_Card_Gr7 } from '../../components/admin_comp/Scheduling_Card_Gr7';
import { Scheduling_Card_Gr8 } from '../../components/admin_comp/Scheduling_Card_Gr8';
import { Scheduling_Card_Gr9 } from '../../components/admin_comp/Scheduling_Card_Gr9';
import { Scheduling_Card_Gr10 } from '../../components/admin_comp/Scheduling_Card_Gr10';

export const Admin_Scheduling = () => {
  return (
    <>
      <Header />
      <Navigation_Bar userRole="super_admin" />
      <div className="adminSchedulesContainer">
        <h2>Schedules</h2>
        <div className="adminSchedulesSorter">
          <div className="adminScheduleSearch">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="adminScheduleSearchBar" />
          </div>
          <div className="adminScheduleSortSubject">
            <label>Faculty/Subject</label>
            <select>
              <option>Science</option>
            </select>
          </div>
          <div className="adminScheduleSortGrade">
            <label>Grade Level</label>
            <select>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
            </select>
          </div>
          <div className="adminScheduleSortSection">
            <label>Section</label>
            <select>
              <option>Sample</option>
            </select>
          </div>
        </div>
        <div className="gradeSchedulesContainer">
          <div className="grade_7">
            <Scheduling_Card_Gr7 />
          </div>
          <div className="grade_8">
            <Scheduling_Card_Gr8 />
          </div>
          <div className="grade_9">
            <Scheduling_Card_Gr9 />
          </div>
          <div className="grade_10">
            <Scheduling_Card_Gr10 />
          </div>
        </div>
      </div>
    </>
  );
};
