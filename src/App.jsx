import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/ContactUs';
import LogIn from './pages/LogIn/LogIn';
import Footer from './Footer';
import BookingPage from './pages/Booking/BookingPage';
import TherapistCreate from './pages/Therapist Create/TherapistCreate';
import Signup from './pages/Signup/Signup';
import CounselorRequirement from './pages/Requirement/RequirementPage';
import BlogDetails from './pages/Blogs/BlogDetails';
// import RecommendedDetails from './pages/Blogs/RecommendedDetails';
import EditProfile from './pages/EditProfile/EditProfile';
import TherapistProfile from './pages/Therapist Profile/TherapistProfile';

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };
  return (
    <div className="App">
      <button type="button" onClick={() => handleChangeLng('en')}>
        English
      </button>
      <button type="button" onClick={() => handleChangeLng('jp')}>
        Jp
      </button>
      <button type="button" onClick={() => handleChangeLng('tr')}>
        tr
      </button>
      <h1>{t('hello')}</h1>
      <h1>{t('how are you?')}</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home t={t} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          <Route path="/about" element={<About t={t} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact t={t} />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/therapist/create" element={<TherapistCreate />} />
          <Route path="/RequirementPage" element={<CounselorRequirement />} />
          <Route path="/profile" element={<EditProfile t={t} />} />
          <Route path="/therapist/profile" element={<TherapistProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
