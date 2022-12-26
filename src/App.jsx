import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import LogIn from './pages/LogIn/LogIn';
import Footer from './Footer';
import BookingPage from './pages/Booking/BookingPage';
import Thanks from './pages/Thanks/thanks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/bookingPage" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
