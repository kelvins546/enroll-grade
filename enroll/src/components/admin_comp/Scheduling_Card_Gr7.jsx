import { useState } from 'react';
import { ReusableModalBox } from '../../components/modals/Reusable_Modal';
import './scheduling_card.css';

export const Scheduling_Card_Gr7 = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessNotif, setShowSuccessNotif] = useState(false);

  // Initialize sections state keyed by time slot
  const [sections, setSections] = useState({
    '6:00-6:45': 'Timothy - 412 B',
    '6:45-7:30': 'Mark - 409 A',
    '8:40-9:00': 'Recess',
    '11:35-12:20': 'HGP - Isaiah',
    // other slots can be empty strings or null
  });

  // Drag handlers
  const onDragStart = (event, timeKey) => {
    event.dataTransfer.setData('sectionKey', timeKey);
  };

  const onDrop = (event, dropKey) => {
    const dragKey = event.dataTransfer.getData('sectionKey');
    if (!dragKey || dragKey === dropKey) return;

    setSections((prev) => {
      const newSections = { ...prev };
      // Swap dragged and dropped section values
      const temp = newSections[dragKey] || '';
      newSections[dragKey] = newSections[dropKey] || '';
      newSections[dropKey] = temp;
      return newSections;
    });
    event.preventDefault();
  };

  const onDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
  };

  return (
    <>
      <div className="faculty-card">
        <div className="faculty_card_header_grade7"></div>

        <div className="faculty-card-body">
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

          <div className="faculty-details">
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
          <div className="faculty_card_header_grade7"></div>
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
                  <th>Time (Mon-Thu)</th>
                  <th>Time (Fri)</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['6:00 - 6:45', '6:00 - 6:40', '6:00-6:45'],
                  ['6:45 - 7:30', '6:40 - 7:20', '6:45-7:30'],
                  ['7:30 - 8:15', '7:20 - 8:00', '7:30-8:15'],
                  ['8:15 - 9:00', '8:00 - 8:40', '8:15-9:00'],
                  ['9:00 - 9:20', '8:40 - 9:00', '8:40-9:00'],
                  ['9:20 - 10:05', '9:00 - 9:40', '9:00-9:20'],
                  ['10:05 - 10:50', '9:40 - 10:20', '9:20-10:05'],
                  ['10:50 - 11:35', '10:20 - 11:00', '10:05-10:50'],
                  ['11:35 - 12:20', '11:00 - 11:40', '10:50-11:35'],
                  ['', '11:40 - 12:20', '11:35-12:20'],
                ].map(([monThuTime, friTime, key]) => {
                  const value = sections[key] || '';
                  const isRecess = value === 'Recess';
                  const isHGP = value === 'HGP - Isaiah';

                  return (
                    <tr key={key}>
                      <td>{monThuTime}</td>
                      <td>{friTime}</td>
                      <td
                        draggable={!!value && !isRecess && !isHGP}
                        onDragStart={
                          !isRecess && !isHGP
                            ? (e) => onDragStart(e, key)
                            : undefined
                        }
                        onDrop={
                          !isRecess && !isHGP
                            ? (e) => onDrop(e, key)
                            : undefined
                        }
                        onDragOver={
                          !isRecess && !isHGP ? onDragOver : undefined
                        }
                        style={{
                          cursor:
                            !value || isRecess || isHGP ? 'default' : 'move',
                          userSelect: 'none',
                          backgroundColor: isRecess
                            ? '#d4edda'
                            : isHGP
                              ? '#e2e3e5'
                              : 'white',
                          color: isHGP ? '#333' : 'inherit',
                          fontWeight: isRecess || isHGP ? 600 : 400,
                          textAlign: 'center',
                          padding: '5px',
                        }}
                      >
                        {value}
                      </td>
                    </tr>
                  );
                })}
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
