import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import LogIn from './pages/LogIn/LogIn';

function App() {
  return (
    <div className="App">
       <NavBar /> 
        <Routes>
	         	<Route path="/" element={<Home/ >}/>
	        	<Route path="/blogs"  element={<Blogs/ >}/>
	          <Route path="/About" element={<About/ >}/>
	        	<Route path="/Team" element={<Team/ >}/>
		        <Route path="/Careers" element={<Careers/ >}/>
            <Route path="/Contact" element={<Contact/ >}/>
            <Route path="/LogIn" element={<LogIn/ >}/> 
       </Routes>
    </div>
  );
}

export default App;
