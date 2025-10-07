import './enrollment_form.css';
import { Enrollment_Container } from '../containers/Enrollment_Container';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import EnrollmentSuccessModal from '../modals/EnrollmentSuccessModal';

export const Enrollment_Form = () => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedSchoolYear] = useState('2025-2026');

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) setCurrentUserId(userId);
  }, []);

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [medicalConditions, setMedicalConditions] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [selectedGradeLevel, setSelectedGradeLevel] = useState('');

  const [lRN, setLRN] = useState('');
  const [grade, setGrade] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [streetBlock, setStreetBlock] = useState('');
  const [city, setCity] = useState('');
  const [barangay, setBarangay] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [indigenousGroup, setIndigenousGroup] = useState('');
  const philippinesNow = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
  );

  const [fatherName, setFatherName] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [fatherContact, setFatherContact] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [motherContact, setMotherContact] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianOccupation, setGuardianOccupation] = useState('');
  const [guardianContact, setGuardianContact] = useState('');
  const [guardianRelationship, setGuardianRelationship] = useState('');
  const [guardianStreetBlock, setGuardianStreetBlock] = useState('');
  const [guardianCity, setGuardianCity] = useState('');
  const [guardianBarangay, setGuardianBarangay] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const [formerSchoolName, setFormerSchoolName] = useState('');
  const [formerSchoolAddress, setFormerSchoolAddress] = useState('');
  const [lastGradeCompleted, setLastGradeCompleted] = useState('');
  const [lastSchoolYear, setLastSchoolYear] = useState('');
  const [average, setAverage] = useState('');

  const [psaFile, setPsaFile] = useState(null);
  const [reportCardFile, setReportCardFile] = useState(null);
  const [sf10File, setSf10File] = useState(null);
  const [idPhotoFile, setIdPhotoFile] = useState(null);

  const [checkedPolicies, setCheckedPolicies] = useState({
    policy1: false,
    policy2: false,
  });
  const [governmentIdType, setGovernmentIdType] = useState('');
  const [govIdFile, setGovIdFile] = useState(null);

  const [errors, setErrors] = useState({});

  const handleFileChange = (event, setter) => {
    const file = event.target.files[0];
    setter(file);
  };

  const filePreview = (file) => {
    if (!file) return null;
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    } else {
      return null;
    }
  };

  const validateStep1 = () => {
    let tempErrors = {};
    if (!lRN.trim()) tempErrors.lRN = 'LRN is required.';
    if (!grade.trim()) tempErrors.grade = 'Grade is required.';
    if (!lastName.trim()) tempErrors.lastName = 'Last Name is required.';
    if (!firstName.trim()) tempErrors.firstName = 'First Name is required.';
    if (!gender.trim()) tempErrors.gender = 'Gender is required.';
    if (!birthdate.trim()) tempErrors.birthdate = 'Birthdate is required.';
    if (!placeOfBirth.trim())
      tempErrors.placeOfBirth = 'Place of birth is required.';
    if (!streetBlock.trim())
      tempErrors.streetBlock = 'Street/Block is required.';
    if (!city.trim()) tempErrors.city = 'City is required.';
    if (!barangay.trim()) tempErrors.barangay = 'Barangay is required.';
    if (!civilStatus.trim())
      tempErrors.civilStatus = 'Civil status is required.';
    if (!citizenship.trim())
      tempErrors.citizenship = 'Citizenship is required.';
    if (!motherTongue.trim())
      tempErrors.motherTongue = 'Mother Tongue is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep2 = () => {
    let tempErrors = {};
    if (!fatherName.trim())
      tempErrors.fatherName = "Father's Name is required.";
    if (!fatherOccupation.trim())
      tempErrors.fatherOccupation = "Father's Occupation is required.";
    if (!fatherContact.trim())
      tempErrors.fatherContact = "Father's Contact is required.";
    if (!motherName.trim())
      tempErrors.motherName = "Mother's Name is required.";
    if (!motherOccupation.trim())
      tempErrors.motherOccupation = "Mother's Occupation is required.";
    if (!motherContact.trim())
      tempErrors.motherContact = "Mother's Contact is required.";
    if (!guardianName.trim())
      tempErrors.guardianName = "Guardian's Name is required.";
    if (!guardianOccupation.trim())
      tempErrors.guardianOccupation = "Guardian's Occupation is required.";
    if (!guardianContact.trim())
      tempErrors.guardianContact = "Guardian's Contact is required.";
    if (!guardianRelationship.trim())
      tempErrors.guardianRelationship = "Guardian's Relationship is required.";
    if (!guardianStreetBlock.trim())
      tempErrors.guardianStreetBlock = "Guardian's Street/Block is required.";
    if (!guardianCity.trim())
      tempErrors.guardianCity = "Guardian's City is required.";
    if (!guardianBarangay.trim())
      tempErrors.guardianBarangay = "Guardian's Barangay is required.";
    if (!emergencyName.trim())
      tempErrors.emergencyName = 'Emergency Contact Name is required.';
    if (!emergencyContact.trim())
      tempErrors.emergencyContact = 'Emergency Contact Number is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep3 = () => {
    let tempErrors = {};
    if (!formerSchoolName.trim())
      tempErrors.formerSchoolName = 'Former School Name is required.';
    if (!formerSchoolAddress.trim())
      tempErrors.formerSchoolAddress = 'Former School Address is required.';
    if (!lastGradeCompleted.trim())
      tempErrors.lastGradeCompleted = 'Last Grade Completed is required.';
    if (!lastSchoolYear.trim())
      tempErrors.lastSchoolYear = 'Last School Year Attended is required.';
    if (!average.trim()) tempErrors.average = 'Average is required.';
    if (!psaFile) tempErrors.psaFile = 'PSA / Birth Certificate is required.';
    if (!reportCardFile)
      tempErrors.reportCardFile = 'Report Card / Form 138 is required.';
    if (!sf10File) tempErrors.sf10File = 'SF10 is required.';
    if (!idPhotoFile) tempErrors.idPhotoFile = 'ID Photo is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep4 = () => {
    let tempErrors = {};
    if (!checkedPolicies.policy1 || !checkedPolicies.policy2) {
      tempErrors.policies = 'You must agree to all policies.';
    }
    if (!governmentIdType.trim())
      tempErrors.governmentIdType = 'Please select a government ID.';
    if (!govIdFile)
      tempErrors.govIdFile = 'Uploading government ID file is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate('/applicant_homepage');
    } else {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!currentUserId) {
      alert('Please log in before submitting the form.');
      return;
    }

    const applicantPayload = {
      user_id: currentUserId,
      agreed_policy_1: checkedPolicies.policy1,
      agreed_policy_2: checkedPolicies.policy2,
      government_id: governmentIdType,
      government_id_file: govIdFile ? govIdFile.name : null,
    };
    const { data: applicantRow, error: appError } = await supabase
      .from('applicants')
      .upsert(applicantPayload, { onConflict: 'user_id' })
      .select('applicant_id')
      .single();

    if (appError) {
      alert('Failed to save applicant: ' + appError.message);
      return;
    }

    const studentPayload = {
      user_id: currentUserId,
      applicant_id: applicantRow ? applicantRow.applicant_id : null,
      lrn: lRN,
      place_of_birth: placeOfBirth,
      gender: gender.toLowerCase(),
      address: `${streetBlock}, ${barangay}, ${city}`,
      citizenship,
      civil_status: civilStatus,
      mother_tongue: motherTongue,
      indigenous_group: indigenousGroup,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      suffix: suffix,
    };

    const { data: student, error: studentError } = await supabase
      .from('students')
      .upsert(studentPayload, { onConflict: 'user_id' })
      .select('student_id')
      .single();
    if (studentError) {
      alert('Failed to save student info: ' + studentError.message);
      return;
    }
    const enrollmentPayload = {
      applicant_id: applicantRow ? applicantRow.applicant_id : null,
      school_year: selectedSchoolYear, // this is your fixed state ('2025-2026')
      grade_level: grade, // <- the value from your grade select/dropdown
      application_date: philippinesNow.toISOString(),

      status: 'pending',
      adviser_approved: false,
      dept_head_approved: false,
      principal_approved: false,
      is_transferee: false, // <- always NOT transferee
      confirmed_by_guardian: false,
    };

    const { error: enrollmentError } = await supabase
      .from('enrollments')
      .insert([enrollmentPayload]);

    if (enrollmentError) {
      alert('Failed to save enrollment: ' + enrollmentError.message);
      return;
    }
    const healthPayload = {
      student_id: student.student_id,
      medical_conditions: medicalConditions, // from your form/input
      blood_type: bloodType, // from your form/input
    };

    const { error: healthError } = await supabase
      .from('health_info')
      .upsert(healthPayload, { onConflict: 'student_id' });

    if (healthError) {
      alert('Failed to save health info: ' + healthError.message);
      return;
    }

    const familyPayload = {
      student_id: student.student_id,
      father_name: fatherName,
      father_occupation: fatherOccupation,
      father_contact: fatherContact,
      mother_name: motherName,
      mother_occupation: motherOccupation,
      mother_contact: motherContact,
      guardian_name: guardianName,
      guardian_relationship: guardianRelationship,
      guardian_contact: guardianContact,
      emergency_contact_name: emergencyName,
      emergency_contact_number: emergencyContact,
    };
    const { error: familyError } = await supabase
      .from('family_info')
      .upsert(familyPayload, { onConflict: 'student_id' });
    if (familyError) {
      alert('Failed to save family info: ' + familyError.message);
      return;
    }

    const academicPayload = {
      student_id: student.student_id,
      former_school_name: formerSchoolName,
      former_school_address: formerSchoolAddress,
      last_grade_level_completed: Number(lastGradeCompleted),
      last_school_year_attended: lastSchoolYear,
      general_average: Number(average),
    };
    const { error: acadError } = await supabase
      .from('academic_history')
      .insert([academicPayload]);
    if (acadError) {
      alert('Failed to save academic history: ' + acadError.message);
      return;
    }

    const documentsPayload = [];
    if (psaFile)
      documentsPayload.push({
        student_id: student.student_id,
        document_type: 'psa_birth_cert',
        file_path: psaFile.name,
      });
    if (reportCardFile)
      documentsPayload.push({
        student_id: student.student_id,
        document_type: 'report_card',
        file_path: reportCardFile.name,
      });
    if (sf10File)
      documentsPayload.push({
        student_id: student.student_id,
        document_type: 'sf10',
        file_path: sf10File.name,
      });
    if (idPhotoFile)
      documentsPayload.push({
        student_id: student.student_id,
        document_type: 'id_photo',
        file_path: idPhotoFile.name,
      });

    if (documentsPayload.length > 0) {
      const { error: docsError } = await supabase
        .from('documents')
        .insert(documentsPayload);
      if (docsError) {
        alert('Failed to save documents: ' + docsError.message);
        return;
      }
    }

    // alert("Enrollment form submitted successfully!");
    // navigate("/applicant_homepage");
    setShowSuccessModal(true);
  };

  return (
    <Enrollment_Container>
      <EnrollmentSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      {step === 1 && (
        <>
          {}
          <div className="studentInfoContainer">
            <h1>Student Information</h1>
            <div className="student_Infos">
              <div className="student_Info first">
                <div className="inputGroup">
                  <label>LRN</label>
                  <input
                    value={lRN}
                    onChange={(e) => setLRN(e.target.value)}
                    required
                  />
                  {errors.lRN && <p className="error">{errors.lRN}</p>}
                </div>
                <div className="inputGroup">
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
                  {errors.grade && <p className="error">{errors.grade}</p>}
                </div>
              </div>
              <div className="student_Info">
                <div className="inputGroup">
                  <label>Last Name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>First Name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Middle Name</label>
                  <input
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="inputGroup-suffix">
                  <label>Suffix</label>
                  <input
                    type="text"
                    className="suffix"
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                  />
                </div>
              </div>
              <div className="student_Info">
                <div className="inputGroup">
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
                  {errors.gender && <p className="error">{errors.gender}</p>}
                </div>
                <div className="inputGroup">
                  <label>Birthdate</label>
                  <input
                    type="date"
                    className="birthDate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                  {errors.birthdate && (
                    <p className="error">{errors.birthdate}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Place of Birth</label>
                  <input
                    value={placeOfBirth}
                    onChange={(e) => setPlaceOfBirth(e.target.value)}
                    required
                  />
                  {errors.placeOfBirth && (
                    <p className="error">{errors.placeOfBirth}</p>
                  )}
                </div>
              </div>
            </div>
            <p className="titleLabel">Address</p>
            <div className="address_Infos">
              <div className="address_Info">
                <div className="inputGroup">
                  <label>Street/Block</label>
                  <input
                    value={streetBlock}
                    onChange={(e) => setStreetBlock(e.target.value)}
                    required
                  />
                  {errors.streetBlock && (
                    <p className="error">{errors.streetBlock}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>City</label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div className="inputGroup">
                  <label>Barangay</label>
                  <input
                    value={barangay}
                    onChange={(e) => setBarangay(e.target.value)}
                    required
                  />
                  {errors.barangay && (
                    <p className="error">{errors.barangay}</p>
                  )}
                </div>
              </div>
              <div className="address_Info">
                <div className="inputGroup">
                  <label>Civil Status</label>
                  <input
                    value={civilStatus}
                    onChange={(e) => setCivilStatus(e.target.value)}
                    required
                  />
                  {errors.civilStatus && (
                    <p className="error">{errors.civilStatus}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Citizenship</label>
                  <input
                    value={citizenship}
                    onChange={(e) => setCitizenship(e.target.value)}
                    required
                  />
                  {errors.citizenship && (
                    <p className="error">{errors.citizenship}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Mother Tongue</label>
                  <input
                    value={motherTongue}
                    onChange={(e) => setMotherTongue(e.target.value)}
                    required
                  />
                  {errors.motherTongue && (
                    <p className="error">{errors.motherTongue}</p>
                  )}
                </div>
              </div>
              <div className="address_Info indigenous">
                <div className="inputGroup">
                  <label>Indigenous Group? If yes, please specify</label>
                  <input
                    placeholder="(Optional)"
                    value={indigenousGroup}
                    onChange={(e) => setIndigenousGroup(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <p className="titleLabel">Health Info</p>
            <div className="health_Infos">
              <div className="health_Info">
                <div className="inputGroup">
                  <label>Medical conditions if yes, please specify.</label>
                  <input
                    value={medicalConditions}
                    onChange={(e) => setMedicalConditions(e.target.value)}
                  />
                </div>
                <div className="inputGroup">
                  <label>Bloodtype</label>
                  <input
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="buttons_Container">
              <div className="buttons">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="guardianInfoContainer">
            <h1>Family / Guardian Information</h1>
            <div className="guardian_Infos">
              <div className="guardian_Info">
                <div className="inputGroup">
                  <label>Father's Name</label>
                  <input
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                  {errors.fatherName && (
                    <p className="error">{errors.fatherName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Occupation</label>
                  <select
                    value={fatherOccupation}
                    onChange={(e) => setFatherOccupation(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Occupation
                    </option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Businessman">Businessman</option>
                    <option value="Employee">Employee</option>
                    <option value="Freelancer">Freelancer</option>
                    <option>Retired</option>
                  </select>
                  {errors.fatherOccupation && (
                    <p className="error">{errors.fatherOccupation}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Contact No.</label>
                  <input
                    value={fatherContact}
                    onChange={(e) => setFatherContact(e.target.value)}
                    required
                  />
                  {errors.fatherContact && (
                    <p className="error">{errors.fatherContact}</p>
                  )}
                </div>
              </div>
              <div className="guardian_Info">
                <div className="inputGroup">
                  <label>Mother's Name</label>
                  <input
                    value={motherName}
                    onChange={(e) => setMotherName(e.target.value)}
                    required
                  />
                  {errors.motherName && (
                    <p className="error">{errors.motherName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Occupation</label>
                  <select
                    value={motherOccupation}
                    onChange={(e) => setMotherOccupation(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Occupation
                    </option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Businessman">Businessman</option>
                    <option value="Employee">Employee</option>
                    <option value="Freelancer">Freelancer</option>
                    <option>Retired</option>
                  </select>
                  {errors.motherOccupation && (
                    <p className="error">{errors.motherOccupation}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Contact No.</label>
                  <input
                    value={motherContact}
                    onChange={(e) => setMotherContact(e.target.value)}
                    required
                  />
                  {errors.motherContact && (
                    <p className="error">{errors.motherContact}</p>
                  )}
                </div>
              </div>
              <div className="guardian_Info">
                <div className="inputGroup">
                  <label>Guardian's Name</label>
                  <input
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    required
                  />
                  {errors.guardianName && (
                    <p className="error">{errors.guardianName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Occupation</label>
                  <select
                    value={guardianOccupation}
                    onChange={(e) => setGuardianOccupation(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Occupation
                    </option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Businessman">Businessman</option>
                    <option value="Employee">Employee</option>
                    <option value="Freelancer">Freelancer</option>
                    <option>Retired</option>
                  </select>
                  {errors.guardianOccupation && (
                    <p className="error">{errors.guardianOccupation}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Contact No.</label>
                  <input
                    value={guardianContact}
                    onChange={(e) => setGuardianContact(e.target.value)}
                    required
                  />
                  {errors.guardianContact && (
                    <p className="error">{errors.guardianContact}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Relationship</label>
                  <input
                    value={guardianRelationship}
                    onChange={(e) => setGuardianRelationship(e.target.value)}
                    required
                  />
                  {errors.guardianRelationship && (
                    <p className="error">{errors.guardianRelationship}</p>
                  )}
                </div>
              </div>
              <p>Address</p>
              <div className="guardian_Address_Infos">
                <div className="guardian_Address_Info">
                  <div className="inputGroup">
                    <label>Street / Block</label>
                    <input
                      value={guardianStreetBlock}
                      onChange={(e) => setGuardianStreetBlock(e.target.value)}
                      required
                    />
                    {errors.guardianStreetBlock && (
                      <p className="error">{errors.guardianStreetBlock}</p>
                    )}
                  </div>
                  <div className="inputGroup">
                    <label>City</label>
                    <input
                      value={guardianCity}
                      onChange={(e) => setGuardianCity(e.target.value)}
                      required
                    />
                    {errors.guardianCity && (
                      <p className="error">{errors.guardianCity}</p>
                    )}
                  </div>
                  <div className="inputGroup">
                    <label>Barangay</label>
                    <input
                      value={guardianBarangay}
                      onChange={(e) => setGuardianBarangay(e.target.value)}
                      required
                    />
                    {errors.guardianBarangay && (
                      <p className="error">{errors.guardianBarangay}</p>
                    )}
                  </div>
                </div>
              </div>
              <p>Incase of emergency</p>
              <div className="emergency_Infos">
                <div className="emergency_Info">
                  <div className="inputGroup">
                    <label>Name</label>
                    <input
                      value={emergencyName}
                      onChange={(e) => setEmergencyName(e.target.value)}
                      required
                    />
                    {errors.emergencyName && (
                      <p className="error">{errors.emergencyName}</p>
                    )}
                  </div>
                  <div className="inputGroup">
                    <label>Contact No.</label>
                    <input
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      required
                    />
                    {errors.emergencyContact && (
                      <p className="error">{errors.emergencyContact}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="buttons_Container">
                <div className="buttons">
                  <button onClick={handleBack}>Back</button>
                  <button onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="academicBackgroundContainer">
            <h1>Student Academic Background</h1>
            <div className="former_School_Infos">
              <div className="former_School_Info">
                <div className="inputGroup">
                  <label>Former School Name</label>
                  <input
                    value={formerSchoolName}
                    onChange={(e) => setFormerSchoolName(e.target.value)}
                    required
                  />
                  {errors.formerSchoolName && (
                    <p className="error">{errors.formerSchoolName}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>School Address</label>
                  <input
                    value={formerSchoolAddress}
                    onChange={(e) => setFormerSchoolAddress(e.target.value)}
                    required
                  />
                  {errors.formerSchoolAddress && (
                    <p className="error">{errors.formerSchoolAddress}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="last_School_Infos">
              <div className="last_School_Info">
                <div className="inputGroup">
                  <label>Last Grade Completed</label>
                  <select
                    value={lastGradeCompleted}
                    onChange={(e) => setLastGradeCompleted(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Grade
                    </option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                  </select>
                  {errors.lastGradeCompleted && (
                    <p className="error">{errors.lastGradeCompleted}</p>
                  )}
                </div>
                <div className="inputGroup">
                  <label>Last School Year Attended</label>
                  <input
                    value={lastSchoolYear}
                    onChange={(e) => setLastSchoolYear(e.target.value)}
                    required
                  />
                  {errors.lastSchoolYear && (
                    <p className="error">{errors.lastSchoolYear}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="average_Infos">
              <div className="average_Info">
                <div className="inputGroup">
                  <label>Average</label>
                  <input
                    value={average}
                    onChange={(e) => setAverage(e.target.value)}
                    required
                  />
                  {errors.average && <p className="error">{errors.average}</p>}
                </div>
              </div>
            </div>
            <p>Document Upload</p>
            <div className="document_Infos">
              <div className="document_Upload_Buttons">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <label style={{ width: '200px', marginRight: '18px' }}>
                    PSA / Birth Certificate
                  </label>
                  <input
                    type="file"
                    id="psaFileUpload"
                    hidden
                    onChange={(e) => handleFileChange(e, setPsaFile)}
                  />
                  <label
                    htmlFor="psaFileUpload"
                    className="upload-btn-PSA"
                    style={{ marginRight: '14px' }}
                  >
                    Upload File
                  </label>
                  {psaFile && (
                    <img
                      src={filePreview(psaFile)}
                      alt="PSA Preview"
                      className="file-preview"
                    />
                  )}
                  {errors.psaFile && (
                    <span className="error" style={{ marginLeft: '14px' }}>
                      {errors.psaFile}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <label style={{ width: '200px', marginRight: '18px' }}>
                    Report Card / Form 138
                  </label>
                  <input
                    type="file"
                    id="reportCardFileUpload"
                    hidden
                    onChange={(e) => handleFileChange(e, setReportCardFile)}
                  />
                  <label
                    htmlFor="reportCardFileUpload"
                    className="upload-btn-Card"
                    style={{ marginRight: '14px' }}
                  >
                    Upload File
                  </label>
                  {reportCardFile && (
                    <img
                      src={filePreview(reportCardFile)}
                      alt="Report Card Preview"
                      className="file-preview"
                    />
                  )}
                  {errors.reportCardFile && (
                    <span className="error" style={{ marginLeft: '14px' }}>
                      {errors.reportCardFile}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <label style={{ width: '200px', marginRight: '18px' }}>
                    SF10 (from previous school)
                  </label>
                  <input
                    type="file"
                    id="sf10FileUpload"
                    hidden
                    onChange={(e) => handleFileChange(e, setSf10File)}
                  />
                  <label
                    htmlFor="sf10FileUpload"
                    className="upload-btn-SF10"
                    style={{ marginRight: '14px' }}
                  >
                    Upload File
                  </label>
                  {sf10File && (
                    <img
                      src={filePreview(sf10File)}
                      alt="SF10 Preview"
                      className="file-preview"
                    />
                  )}
                  {errors.sf10File && (
                    <span className="error" style={{ marginLeft: '14px' }}>
                      {errors.sf10File}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label style={{ width: '200px', marginRight: '18px' }}>
                    ID Photo
                  </label>
                  <input
                    type="file"
                    id="idPhotoFileUpload"
                    hidden
                    onChange={(e) => handleFileChange(e, setIdPhotoFile)}
                  />
                  <label
                    htmlFor="idPhotoFileUpload"
                    className="upload-btn-ID"
                    style={{ marginRight: '14px' }}
                  >
                    Upload File
                  </label>
                  {idPhotoFile && (
                    <img
                      src={filePreview(idPhotoFile)}
                      alt="ID Photo Preview"
                      className="file-preview"
                    />
                  )}
                  {errors.idPhotoFile && (
                    <span className="error" style={{ marginLeft: '14px' }}>
                      {errors.idPhotoFile}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="buttons_Container">
              <div className="buttons">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="agreementContainer">
            <div className="agreement">
              <p>
                As the parent/guardian of the above-named student, I hereby
                acknowledge and agree to the following:
              </p>
              <ol>
                <li>
                  <strong>Commitment to Education</strong>
                  <ul>
                    <li>
                      I will support my child’s regular attendance, punctuality,
                      and participation in school activities.
                    </li>
                    <li>
                      I will encourage my child to complete assignments,
                      projects, and requirements on time.
                    </li>
                    <li>
                      I will provide a conducive learning environment at home.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Conduct and Discipline</strong>
                  <ul>
                    <li>
                      I understand that my child is expected to follow the
                      school’s rules, regulations, and code of conduct.
                    </li>
                    <li>
                      I will cooperate with teachers and school administrators
                      in addressing any behavioral or academic issues.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Communication and Cooperation</strong>
                  <ul>
                    <li>
                      I will attend parent-teacher meetings, orientations, and
                      conferences when required.
                    </li>
                    <li>
                      I will promptly inform the school of any changes in
                      contact information, health conditions, or family matters
                      that may affect my child’s schooling.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Financial Responsibilities</strong>
                  <ul>
                    <li>
                      I agree to settle school fees and other school-related
                      obligations on or before the deadlines set by the school.
                    </li>
                    <li>
                      I understand that failure to fulfill financial
                      responsibilities may affect my child’s enrollment status.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Safety and Welfare</strong>
                  <ul>
                    <li>
                      I authorize the school to take appropriate action in case
                      of emergency, accident, or illness involving my child.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p>
              <strong>Acknowledgement</strong>
            </p>
            <div className="acknowledge_Infos">
              <div className="acknowledge_Info">
                <input
                  type="checkbox"
                  checked={checkedPolicies.policy1}
                  onChange={(e) =>
                    setCheckedPolicies((prev) => ({
                      ...prev,
                      policy1: e.target.checked,
                    }))
                  }
                />
                <label>
                  I have read, understood, and agreed to abide by the policies,
                  rules, and regulations of the school.
                </label>
                {errors.policies && <p className="error">{errors.policies}</p>}
              </div>
              <div className="acknowledge_Info">
                <input
                  type="checkbox"
                  checked={checkedPolicies.policy2}
                  onChange={(e) =>
                    setCheckedPolicies((prev) => ({
                      ...prev,
                      policy2: e.target.checked,
                    }))
                  }
                />
                <label>
                  I understand that enrollment signifies acceptance of this
                  agreement.
                </label>
              </div>
            </div>
            <p style={{ fontSize: '17px' }}>
              Please upload a valid Government-issued ID to continue.
            </p>
            <div className="upload_ID">
              <div className="id_Select">
                <label>Government Id</label>
                <select
                  value={governmentIdType}
                  onChange={(e) => setGovernmentIdType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select ID
                  </option>
                  <option>Passport</option>
                  <option>National ID / PhilSys</option>
                  <option>Voter's ID</option>
                  <option>UMID</option>
                  <option>SSS ID</option>
                  <option>GSIS e-Card</option>
                  <option>Driver's License</option>
                  <option>PRC ID</option>
                  <option>PhilHealth ID</option>
                  <option>Postal ID</option>
                  <option>Senior Citizen ID</option>
                  <option>PWD ID</option>
                  <option>Police Clearance</option>
                  <option>NBI Clearance</option>
                  <option>BIR/TIN ID</option>
                  <option>Barangay ID</option>
                  <option>Company ID (Government employee)</option>
                  <option>OWWA ID</option>
                  <option>Pag-IBIG Loyalty Card</option>
                  <option>iDOLE Card</option>
                  <option>Solo Parent ID</option>
                  <option>Seaman’s Book</option>
                </select>
                {errors.governmentIdType && (
                  <p className="error">{errors.governmentIdType}</p>
                )}
              </div>

              <div className="government_ID_Upload">
                <input
                  type="file"
                  id="govIdFileUpload"
                  hidden
                  onChange={(e) => handleFileChange(e, setGovIdFile)}
                />
                <label htmlFor="govIdFileUpload" className="upload-btn-Gov-ID">
                  Upload File
                </label>
                {govIdFile && (
                  <img
                    src={filePreview(govIdFile)}
                    alt="Government ID Preview"
                    className="file-preview"
                  />
                )}
                {errors.govIdFile && (
                  <p className="error">{errors.govIdFile}</p>
                )}
              </div>
            </div>
            <div className="buttons_Container">
              <div className="buttons">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </Enrollment_Container>
  );
};
