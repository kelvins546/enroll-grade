import { Route,Routes } from "react-router-dom";
import { Landing_page } from "./pages/Landing_page";
import { Register_ph1 } from "./pages/Register_ph1";
import { Applicant_Homepage } from "./pages/applicant/Applicant_Homepage";
import { Applicant_Enroll1 } from "./pages/applicant/Applicant_Enroll";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="Register_ph1" element={<Register_ph1 />} />
        <Route path="Applicant_Homepage" element={<Applicant_Homepage />} />
        <Route path="Applicant_Enroll1" element={<Applicant_Enroll1 />} />
      </Routes>
    </>
  );
}

export default App;
