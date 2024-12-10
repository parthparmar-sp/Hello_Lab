import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/login';
import Complain from './pages/Complain/Complain';
import Index from './pages/components';
import Register from './pages/Auth/register';
import Admin from './pages/Admin';
import ViewComplain from './pages/components/ViewComplain';
import Labschedule from './pages/Labschedule/Labschedule';
import AdminLabShedule from './pages/components/AdminLabSchedule/AdminLabSchedule';
import MyComplain from './pages/components/MyComplain';
import Aboutus from './pages/components/Aboutus' // Ensure AboutUs.js exists at this path
import Contactus from './pages/components/ContactUs';
import PrivacyPolicy from './pages/components/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/header" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/complain' element={<Complain />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/View-Complain' element={<ViewComplain />} />
        <Route path='/AdminLabShedule' element={<AdminLabShedule />} />
        <Route path='/Labschedule' element={<Labschedule />} />
        <Route path='/my-complain' element={<MyComplain />} />
        <Route path="/about" element={<Aboutus />} /> {/* Updated here */}
        <Route path="/contact" element={<Contactus />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
