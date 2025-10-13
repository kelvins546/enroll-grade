import './scheduling_card.css';
import { useState } from 'react';
import { ReusableModalBox } from '../../components/modals/Reusable_Modal';

export const Scheduling_Card_Gr10 = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessNotif, setShowSuccessNotif] = useState(false);

  return (
    <>
      <div className="faculty-card">
        <div className="faculty_card_header_grade10"></div>

        <div className="faculty-card-body">
          <h3>Name: Marissa B. Dela Pacion</h3>
          <p>
            <strong>Department:</strong> Filipino Department
          </p>
          <p>
            <strong>Advisory Class:</strong> Luke
          </p>
          <p>
            <strong>Grade:</strong> 7
          </p>

          <div className="faculty-details">
            <div>
              <p>
                <strong>Degree:</strong> BSE
              </p>
              <p>
                <strong>Major:</strong> English
              </p>
              <p>
                <strong>Minor:</strong> Filipino
              </p>
            </div>
            <div>
              <p>
                <strong>Post Grad:</strong> Masters
              </p>
              <p>
                <strong>Course:</strong> MAEd
              </p>
            </div>
          </div>

          <p>
            <strong>Teaching load per week:</strong> 5+1 / 1360 mins (weekly)
          </p>
          <p>
            <strong>Position:</strong> T-I
          </p>

          <table className="faculty-schedule">
            <thead>
              <tr>
                <th>Time</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 - 6:45</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6:45 - 7:30</td>
                <td>Daniel 404 A</td>
                <td>Daniel 404 A</td>
                <td>Daniel 404 A</td>
              </tr>
            </tbody>
          </table>

          <div className="buttonContainerCard">
            <button className="edit-btn" onClick={() => setShowEditModal(true)}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <ReusableModalBox
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
      >
        <div className="scheduduleEdit">
          <div className="faculty_card_header_grade10"></div>
          <div className="scheduleEditBody">
            <h3>Name: Karen M. Corpus</h3>
            <p>
              <strong>Department:</strong> Filipino Dept
            </p>
            <p>
              <strong>Advisory Class:</strong> John
            </p>
            <p>
              <strong>Grade:</strong> 7
            </p>

            <div className="facultyEditData">
              <div>
                <p>
                  <strong>Degree:</strong> BSED
                </p>
                <p>
                  <strong>Major:</strong> English
                </p>
                <p>
                  <strong>Minor:</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Post Grad:</strong> Masters
                </p>
                <p>
                  <strong>Course:</strong> MAEd
                </p>
              </div>
            </div>

            <p>
              <strong>Teaching load per week:</strong> 5+1 / 1140 mins (weekly)
            </p>
            <p>
              <strong>Position:</strong> T-I
            </p>

            <p className="p-text">Drag Section name to re-arrange schedule</p>

            <table className="scheduleEditTable">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thur</th>
                  <th>Time</th>
                  <th>Fri</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6:00 - 6:45</td>
                  <td>Timothy - 412 B</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>6:00 - 6:40</td>
                  <td>Timothy - 412 B</td>
                </tr>
                <tr>
                  <td>6:45 - 7:30</td>
                  <td>Mark - 409 A</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>7:20 - 8:00</td>
                  <td>Mark - 409 A</td>
                </tr>
              </tbody>
            </table>
            <div className="buttonContainer">
              <button
                className="update-btn"
                onClick={() => setShowSuccessNotif(true)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </ReusableModalBox>
      <ReusableModalBox
        show={showSuccessNotif}
        onClose={() => setShowSuccessNotif(false)}
      >
        <div className="notif">
          <div className="img" style={{ paddingTop: '10px' }}>
            <img
              src="checkImg.png"
              alt="Bagong Pilipinas Logo"
              style={{ height: '50px', width: '50px' }}
            />
          </div>
          <h2>Successfully Updated!</h2>
        </div>
      </ReusableModalBox>
    </>
  );
};
