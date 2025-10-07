import { Routes, Route } from 'react-router-dom';
import { Landing_page } from './pages/Landing_page';
import { Register_ph1 } from './pages/Register_ph1';
import { Applicant_Homepage } from './pages/applicant/Applicant_Homepage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Applicant_Enroll1 } from './pages/applicant/Applicant_Enroll';
import { Applicant_Profile } from './pages/applicant/Applicant_Profile';

// No <BrowserRouter> here!
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing_page />} />
      <Route path="Register_ph1" element={<Register_ph1 />} />

      {/* Protected routes for applicants only */}
      <Route element={<ProtectedRoute allowRoles={['applicant']} />}>
        <Route path="Applicant_Homepage" element={<Applicant_Homepage />} />
        <Route path="Applicant_Enroll1" element={<Applicant_Enroll1 />} />
        <Route path="Applicant_Profile" element={<Applicant_Profile />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Landing_page />} />
    </Routes>
  );
}

export default App;
