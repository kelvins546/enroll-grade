import './enrollment_form.css';
import { Enrollment_Container } from '../containers/Enrollment_Container';
import { useState } from "react";

export const Enrollment_Form = ({ step, setStep }) => {
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [iD, setId] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [guardianOccupation, setGuardianOccupation] = useState("");

  return ( 
    
    <Enrollment_Container>
        {step === 1 && (
            <>
            <div className='studentInfoContainer'>
                <h1>Student Information</h1>
                <div className='student_Infos'>
                    <div className="student_Info first">
                        <div className='inputGroup'>
                            <label>LRN</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Select Grade Level</label>
                            <select
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                Grade
                                </option>
                                <option value="Grade 7">Grade 7</option>
                                <option value="Grade 8">Grade 8</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 10">Grade 10</option>
                            </select>
                        </div>
                    </div>
                    <div className='student_Info'>
                        <div className="inputGroup">
                            <label>Last Name</label>
                            <input />
                        </div>
                        <div className="inputGroup">
                            <label>First Name</label>
                            <input />
                        </div>
                        <div className="inputGroup">
                            <label>Middle Name</label>
                            <input />
                        </div>
                        <div className="inputGroup-suffix">
                            <label>Suffix</label>
                            <input type="text" className="suffix"/>
                        </div>
                    </div>
                    <div className='student_Info'>
                        <div className='inputGroup'>
                            <label>Gender</label>
                            <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                            Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                        <div className='inputGroup'>
                            <label>Birthdate</label>
                            <input type='date' className='birthDate'></input>
                        </div>
                        <div className='inputGroup'>
                            <label>Place of Birth</label>
                            <input></input>
                        </div>
                    </div>
                </div>
                <p className='titleLabel'>Address</p>
                <div className='address_Infos'>
                    <div className='address_Info'>
                        <div className='inputGroup'>
                            <label>Street/Block</label>
                            <input></input>
                        </div>
                        <div className='inputGroup'>
                            <label>City</label>
                            <input></input>
                        </div>
                        <div className='inputGroup'>
                            <label>Barangay</label>
                            <input></input>
                        </div>
                    </div>
                    <div className='address_Info'>
                        <div className='inputGroup'>
                            <label>Civil Status</label>
                            <input></input>
                        </div>
                        <div className='inputGroup'>
                            <label>Citizenship</label>
                            <input></input>
                        </div>
                        <div className='inputGroup'>
                            <label>Mother Tongue</label>
                            <input></input>
                        </div>
                    </div>
                    <div className='address_Info indigenous'>
                        <div className='inputGroup'>
                            <label>Indigenous Group? If yes, please specify</label>
                            <input placeholder='(Optional)'></input>
                        </div>
                    </div>
                </div>
                <p className='titleLabel'>Health Info</p>
                <div className='health_Infos'>
                    <div className='health_Info'>
                        <div className='inputGroup'>
                            <label>Medical conditions if yes, please specify.</label>
                            <input></input>
                        </div>
                        <div className='inputGroup'>
                            <label>Bloodtype</label>
                            <input></input>
                        </div>
                    </div>
                </div>
                <div className='buttons_Container'>
                    <div className='buttons'>
                        <button >Back</button>
                        <button onClick={() => setStep(2)}>Next</button>
                    </div>
                </div>
            </div>
            </>
        )}

        {step === 2 && (
            <>
            <div className='guardianInfoContainer'>
                <h1>Family / Guardian Information</h1>
                <div className='guardian_Infos'>  
                    <div className='guardian_Info'>
                        <div className='inputGroup'>
                            <label>Father's Name</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Occupation</label>
                            <select
                            value={fatherOccupation}
                            onChange={(e) => setFatherOccupation(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                            Select Occupation
                            </option>
                            <option value="">Unemployed</option>
                            <option value="">Businessman</option>
                            <option value="">Employee</option>
                            <option value="">Freelancer</option>
                            <option>Retired</option>
                        </select>
                        </div>
                        <div className='inputGroup'>
                            <label>Contact No.</label>
                            <input />
                        </div>
                    </div>
                    <div className='guardian_Info'>
                        <div className='inputGroup'>
                            <label>Mother's Name</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Occupation</label>
                            <select
                            value={motherOccupation}
                            onChange={(e) => setMotherOccupation(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                            Select Occupation
                            </option>
                            <option value="">Unemployed</option>
                            <option value="">Businessman</option>
                            <option value="">Employee</option>
                            <option value="">Freelancer</option>
                            <option>Retired</option>
                        </select>
                        </div>
                        <div className='inputGroup'>
                            <label>Contact No.</label>
                            <input />
                        </div>
                    </div>
                    <div className='guardian_Info'>
                        <div className='inputGroup'>
                            <label>Guardian's Name</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Occupation</label>
                            <select
                            value={guardianOccupation}
                            onChange={(e) => setGuardianOccupation(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                            Select Occupation
                            </option>
                            <option value="">Unemployed</option>
                            <option value="">Businessman</option>
                            <option value="">Employee</option>
                            <option value="">Freelancer</option>
                            <option>Retired</option>
                        </select>
                        </div>
                        <div className='inputGroup'>
                            <label>Contact No.</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Relationship</label>
                            <input />
                        </div>
                    </div>
                </div>
                <p>Address</p>
                <div className='guardian_Address_Infos'>
                    <div className='guardian_Address_Info'>     
                        <div className='inputGroup'>
                            <label>Street / Block</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>City</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Barangay</label>
                            <input />
                        </div>
                    </div>
                </div>
                <p>Incase of emergency</p>
                <div className='emergency_Infos'>
                    <div className='emergency_Info'>
                    <div className='inputGroup'>
                        <label>Name</label>
                        <input />
                    </div>
                    <div className='inputGroup'>
                        <label>Contact No.</label>
                        <input />
                    </div>
                </div>
                </div>
                <div className='buttons_Container'>
                    <div className='buttons'>
                        <button onClick={() => setStep(1)}>Back</button>
                        <button onClick={() => setStep(3)}>Next</button>
                    </div>
                </div>
            </div>
            </>
        )}

        {step === 3 && (
            <>
            <div className='academicBackgroundContainer'>
                <h1>Student Academic Background</h1>
                <div className='former_School_Infos'>
                    <div className='former_School_Info'>
                        <div className='inputGroup'>
                            <label>Former School Name</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>School Address</label>
                            <input />
                        </div> 
                    </div>
                </div>
                <div className='last_School_Infos'>
                    <div className='last_School_Info'>
                        <div className='inputGroup'>
                            <label>Last Grade Completed</label>
                            <input />
                        </div>
                        <div className='inputGroup'>
                            <label>Last School Year Attended</label>
                            <input />
                        </div>
                    </div>       
                </div>
                <div className='average_Infos'>
                    <div className='average_Info'>
                        <div className='inputGroup'>
                            <label>Average</label>
                            <input />
                        </div>
                    </div>
                </div>
                <p>Document Upload</p>
                <div className='document_Infos'>
                    <div className='document_Labels'>
                        <label>PSA / Birth Certificate</label>
                        <label>Report Card / Form 138</label>
                        <label>SF10 (from previous school)</label>
                        <label>ID Photo</label>
                    </div>
                    <div className='document_Upload_Buttons'>
                        <input type="file" id="fileUpload" hidden />
                        <label for="fileUpload" className="upload-btn-PSA">Upload File</label>
                        <input type="file" id="fileUpload" hidden />
                        <label for="fileUpload" className="upload-btn-Card">Upload File</label>
                        <input type="file" id="fileUpload" hidden />
                        <label for="fileUpload" className="upload-btn-SF10">Upload File</label>
                        <input type="file" id="fileUpload" hidden />
                        <label for="fileUpload" className="upload-btn-ID">Upload File</label>
                    </div>
                </div>
                <div className='buttons_Container'>
                    <div className='buttons'>
                        <button onClick={() => setStep(2)}>Back</button>
                        <button onClick={() => setStep(4)}>Next</button>
                    </div>
                </div>
            </div>
            </>
        )}

        {step === 4 && (
            <>
            <div className='agreementContainer'>
                <div class="agreement">
                    <p>
                        As the parent/guardian of the above-named student, I hereby acknowledge and agree to the following:
                    </p>

                    <ol>
                        <li>
                        <strong>Commitment to Education</strong>
                        <ul>
                            <li>I will support my child’s regular attendance, punctuality, and participation in school activities.</li>
                            <li>I will encourage my child to complete assignments, projects, and requirements on time.</li>
                            <li>I will provide a conducive learning environment at home.</li>
                        </ul>
                        </li>

                        <li>
                        <strong>Conduct and Discipline</strong>
                        <ul>
                            <li>I understand that my child is expected to follow the school’s rules, regulations, and code of conduct.</li>
                            <li>I will cooperate with teachers and school administrators in addressing any behavioral or academic issues.</li>
                        </ul>
                        </li>

                        <li>
                        <strong>Communication and Cooperation</strong>
                        <ul>
                            <li>I will attend parent-teacher meetings, orientations, and conferences when required.</li>
                            <li>I will promptly inform the school of any changes in contact information, health conditions, or family matters that may affect my child’s schooling.</li>
                        </ul>
                        </li>

                        <li>
                        <strong>Financial Responsibilities</strong>
                        <ul>
                            <li>I agree to settle school fees and other school-related obligations on or before the deadlines set by the school.</li>
                            <li>I understand that failure to fulfill financial responsibilities may affect my child’s enrollment status.</li>
                        </ul>
                        </li>

                        <li>
                        <strong>Safety and Welfare</strong>
                        <ul>
                            <li>I authorize the school to take appropriate action in case of emergency, accident, or illness involving my child.</li>
                        </ul>
                        </li>
                    </ol>
                </div>
                <p><strong>Acknowledgement</strong></p>
                <div className='acknowledge_Infos'> 
                    <div className='acknowledge_Info'>
                        <input type='checkbox'/>
                        <label>I have read, understood, and agreed to abide by the policies, rules, and regulations of the school.</label>
                    </div>
                    <div className='acknowledge_Info'>
                        <input type='checkbox'/>
                        <label>I understand that enrollment signifies acceptance of this agreement.</label>
                    </div>  
                </div>
                <div>
                    <p style={{ fontSize: "17px"}}>Please upload a valid Government-issued ID to continue.</p>
                </div>
                <div className='upload_ID'>
                    <div className='id_Select'>
                        <label>Goverment Id</label>
                        <select
                            value = {iD}
                            onChange={(e) => setId(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select ID</option>
                            <option>Passport</option>
                            <option>National ID</option>
                            <option>Voter's ID</option>
                            <option>UMID</option>
                        </select>
                    </div>
                    <div className='government_ID_Upload'>
                        <input type="file" id="fileUpload" hidden />
                        <label for="fileUpload" className="upload-btn-Gov-ID">Upload File</label>
                    </div>
                </div>
                <div className='buttons_Container'>
                    <div className='buttons'>
                        <button onClick={() => setStep(3)}>Back</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            </>
        )}
        
    </Enrollment_Container>
  );
};
