import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import AboutUs from './pages/About/AboutUs/AboutUs';
import Team from './pages/About/Team/Team'
import Careers from './pages/About/Careers/Careers';
import Contact from './pages/Contact/ContactUs';
import LogIn from './pages/LogIn/LogIn';
import Footer from './components/Footer';
import BookingPage from './pages/Booking/BookingPage';
import TherapistCreate from './pages/Therapist Create/TherapistCreate';
import Signup from './pages/Signup/Signup';
import CounselorRequirement from './pages/Requirement/RequirementPage';
import BlogDetails from './pages/Blogs/BlogDetails';
// import RecommendedDetails from './pages/Blogs/RecommendedDetails';
import EditProfile from './pages/EditProfile/EditProfile';
import TherapistProfile from './pages/Therapist Profile/TherapistProfile';
import SignUpThanks from './pages/Signup/SignUpThanks';
import ContactThanks from './pages/Contact/ContactThanks';
import SubscribeThanks from './components/SubscribeThanks';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

       <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
           <Route path="/blogs/:id" element={<BlogDetails />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/therapist/create" element={<TherapistCreate />} />
          <Route path="/RequirementPage" element={<CounselorRequirement />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/therapist/profile" element={<TherapistProfile />} />
          <Route path="/signup-thanks" element={<SignUpThanks />} />
          <Route path="/contact-thanks" element={<ContactThanks />} />
          <Route path="/subscribe-thanks" element={<SubscribeThanks />} />
        </Routes> 

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
