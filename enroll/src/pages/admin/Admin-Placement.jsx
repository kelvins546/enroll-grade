import './admin_placement.css';
import { Header } from '../../components/Header';
import { Navigation_Bar } from '../../components/NavigationBar';
import { Sub_Nav } from '../../components/SubNav';
import { useState } from 'react';
import { ReusableModalBox } from '../../components/modals/Reusable_Modal';
import { ReusableConfirmationModalBox } from '../../components/modals/Reusable_Confirmation_Modal';

export const Admin_Placement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOverrideSection, setShowOverrideSection] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [showApplyNotif, setShowApplyNotif] = useState(false);
  const [showAddNotif, setShowAddNotif] = useState(false);

  const [activeSection, setActiveSection] = useState('sectionList');

  const [sectionListGrade, setSectionListGrade] = useState('');
  const [sectionListSection, setSectionListSection] = useState('');
  const [studentListGrade, setStudentListGrade] = useState('');
  const [studentListSection, setStudentListSection] = useState('');
  return (
    <>
      <Header />
      <Navigation_Bar userRole="super_admin" />
      <Sub_Nav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="placement-container">
        {activeSection === 'sectionList' && (
          <>
            <ReusableConfirmationModalBox
              showConfirm={showConfirm}
              onCloseConfirm={() => setShowConfirm(false)}
            >
              <div>
                <h2>Add new section?</h2>
                <div className="buttons">
                  <button onClick={() => setShowAddNotif(true)}>Yes</button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                      border: '1px solid black',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </ReusableConfirmationModalBox>
            <ReusableModalBox
              show={showModal}
              onClose={() => setShowModal(false)}
            >
              <div className="addNewSection">
                <div className="back">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="addNewSectionInput">
                  <label>Section Name</label>
                  <input></input>
                </div>
                <div className="addNewSectionInput">
                  <label>Grade Level</label>
                  <input></input>
                </div>
                <div className="addNewSectionInput">
                  <label>Number of Students</label>
                  <input></input>
                </div>
                <div className="addNewSectionInput">
                  <label>Adviser</label>
                  <input></input>
                </div>
                <div className="buttonContainer">
                  <button onClick={() => setShowConfirm(true)}>Add</button>
                </div>
              </div>
            </ReusableModalBox>
            <ReusableModalBox
              show={showAddNotif}
              onClose={() => setShowAddNotif(false)}
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
            <div className="sectionList">
              <h2>Sections List</h2>
              <div className="sectionListCards">
                <div className="sectionListCard">
                  <div className="sectionListCardData">
                    <h2>30</h2>
                    <p>Sections with assigned advisers</p>
                  </div>
                  <div className="sectionListCardData">
                    <h2>5</h2>
                    <p>Sections without assigned advisers</p>
                  </div>
                </div>
                <div className="sectionListCard">
                  <div className="sectionlistCardData">
                    <h2>5</h2>
                    <p>Available teachers not yet assigned</p>
                  </div>
                </div>
              </div>
              <div className="sectionListSorter">
                <div className="sectionListSearch">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    className="sectionListSearchbar"
                    placeholder="Search..."
                  />
                </div>
                <div className="sectionListSort Grade">
                  <label>Section</label>
                  <select
                    value={sectionListGrade}
                    onChange={(e) => setSectionListGrade(e.target.value)}
                  >
                    <option value="">All Grade</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                  </select>
                </div>
                <div className="sectionListSort Section">
                  <label>Section</label>
                  <select
                    value={sectionListSection}
                    on
                    onChange={(e) => setSectionListSection(e.target.value)}
                  >
                    <option value="">All Section</option>
                    <option>sample</option>
                  </select>
                </div>
              </div>
              <div className="sectionListTableContainer">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Section</th>
                      <th rowSpan="2">Grade Level</th>
                      <th rowSpan="2">No. of Students</th>
                      <th rowSpan="2">Star Section</th>
                      <th colSpan="2">Assign Advisers</th>
                    </tr>
                    <tr>
                      <th>Advisers</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>7</td>
                      <td>65</td>
                      <td>Yes</td>
                      <td>Ana Liza Ramirez</td>
                      <td>
                        <button>Override</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="button-container">
                <button onClick={() => setShowModal(true)}>
                  Add new section
                </button>
              </div>
            </div>
          </>
        )}

        {activeSection === 'studentList' && (
          <>
            <ReusableModalBox
              show={showOverrideSection}
              onClose={() => setShowOverrideSection(false)}
            >
              <div className="overrideStudent">
                <div className="overrideStudentHeader">
                  <h2>Override Section Assignment</h2>
                </div>
                <div className="overrideSelection">
                  <label>Section</label>
                  <select></select>
                </div>
                <div className="buttonContainer">
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid black',
                      color: 'black',
                    }}
                  >
                    Cancel
                  </button>
                  <button onClick={() => setShowApply(true)}>Apply</button>
                </div>
              </div>
            </ReusableModalBox>
            <ReusableConfirmationModalBox
              showConfirm={showApply}
              onCloseConfirm={() => setShowApply(false)}
            >
              <div>
                <h2>Apply Changes?</h2>
                <div className="buttons">
                  <button onClick={() => setShowApplyNotif(true)}>Yes</button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                      border: '1px solid black',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </ReusableConfirmationModalBox>
            <ReusableModalBox
              show={showApplyNotif}
              onClose={() => setShowApplyNotif(false)}
            >
              <div className="notif">
                <div className="img" style={{ paddingTop: '10px' }}>
                  <img
                    src="checkImg.png"
                    style={{ height: '50px', width: '50px' }}
                  />
                </div>
                <h2>Changes Applied Successfully!</h2>
              </div>
            </ReusableModalBox>
            <div className="studentList">
              <h2>Student List</h2>
              <div className="studentListCards">
                <div className="studentListCard grade7">
                  <p className="gradeLevel">Grade 7</p>
                  <h2>50</h2>
                  <p>Assigned Students</p>
                </div>
                <div className="studentListCard grade8">
                  <p className="gradeLevel">Grade 8</p>
                  <h2>50</h2>
                  <p>Assigned Students</p>
                </div>
                <div className="studentListCard grade9">
                  <p className="gradeLevel">Grade 9</p>
                  <h2>50</h2>
                  <p>Assigned Students</p>
                </div>
                <div className="studentListCard grade10">
                  <p className="gradeLevel">Grade 10</p>
                  <h2>50</h2>
                  <p>Assigned Students</p>
                </div>
              </div>
              <div className="studentListSorter">
                <div className="studentListSearch">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    className="studentListSearchbar"
                    placeholder="Search..."
                  />
                </div>
                <div className="studentListSort Grade">
                  <label>Section</label>
                  <select
                    value={studentListGrade}
                    onChange={(e) => setStudentListGrade(e.target.value)}
                  >
                    <option value="">All Grade</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                  </select>
                </div>
                <div className="studentListSort Section">
                  <label>Section</label>
                  <select
                    value={studentListSection}
                    on
                    onChange={(e) => setStudentListSection(e.target.value)}
                  >
                    <option value="">All Section</option>
                    <option>sample</option>
                  </select>
                </div>
              </div>
              <div className="studentListTableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Grade Level</th>
                      <th>Section</th>
                      <th>Star Section</th>
                      <th>Advisers</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Allen Biriani O.</td>
                      <td>Male</td>
                      <td>7</td>
                      <td>1</td>
                      <td>Yes</td>
                      <td>John Doe</td>
                      <td>
                        <button onClick={() => setShowOverrideSection(true)}>
                          Override
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2. Allen Biriani O.</td>
                      <td>Male</td>
                      <td>7</td>
                      <td>1</td>
                      <td>Yes</td>
                      <td>John Doe</td>
                      <td>
                        <button onClick={() => setShowOverrideSection(true)}>
                          Override
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
