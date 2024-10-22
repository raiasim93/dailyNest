import React, { useState, useEffect } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import HistoryIcon from '@mui/icons-material/History';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleResize = () => {
    if(window.innerWidth > 768){
      setSidebarOpen(false);
    }
  }
  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     <div className='navbar-custom py-4 d-flex'>
  <div className="row g-0 w-100">
    <div className="col-10 mx-auto d-flex justify-content-between align-items-center">
      
      {/* First column - Icon and App Name */}
      <div className='col-3 d-flex justify-content-start align-items-center'>
        <ChecklistIcon fontSize='large' className='text-white pointer' />
        <Link to="/" className='fs-3 fw-normal text-decoration-none ms-2 text-white align-middle pointer'>
          DailyNest
        </Link>
      </div>

      {/* Second Column - Links */}
      <div className='col-6 d-flex justify-content-center align-items-center'>
        {/* On medium to large screens, hide text and show icons only */}
        <div className="d-flex justify-content-center align-items-center w-100">
          <Link to="/upcoming" className='btn btn-custom-button border ms-2'>
            <UpcomingIcon />
            <span className="d-none d-lg-inline-block ms-2">Upcoming</span>
          </Link>
          <Link to="/history" className='btn btn-custom-button border ms-2'>
            <HistoryIcon />
            <span className="d-none d-lg-inline-block ms-2">History</span>
          </Link>
        </div>
      </div>

      {/* Third Column - Login/Signup and Hamburger for mobile */}
      <div className='col-3 d-flex justify-content-end align-items-center pe-0'>
        <div className="d-flex justify-content-end align-items-center">
          <Link to="/login" className='btn btn-custom-button border ms-3 d-none d-md-block'>
            <LoginIcon /> Log In
          </Link>
          <Link to="/create-account" className='btn btn-custom-button border ms-3 d-none d-md-block'>
            <AccountCircleIcon /> Sign Up
          </Link>
        </div>
        <div className="d-md-none">
          <MenuIcon fontSize='large' className='text-white pointer' onClick={toggleSidebar} />
        </div>
      </div>
    </div>
  </div>
</div>

{/* Sidebar for smaller screens */}
<div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
  <div className="d-flex justify-content-between align-items-center p-3">
    <h2 className='text-white'>DailyNest</h2>
    <CloseIcon className='text-white pointer' onClick={toggleSidebar} />
  </div>
  <div className="sidebar-links">
    <Link to="/upcoming" className="text-decoration-none btn p-3 mb-2 border text-center text-white fw-normal fs-3 d-block w-100">
      Upcoming
    </Link>
    <Link to="/history" className='text-decoration-none btn p-3 mb-2 border text-center text-white fw-normal fs-3 d-block w-100'>
      History
    </Link>
    <Link to="/login" className='text-decoration-none btn p-3 mb-2 border text-center text-white fw-normal fs-3 d-block w-100'>
      Log In
    </Link>
    <Link to="/create-account" className='text-decoration-none btn p-3 mb-2 border text-center fw-normal text-white fs-3 d-block w-100'>
      Create Account
    </Link>
  </div>
</div>

{/* Overlay */}
{sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

{/* Add blur effect to content when sidebar is open */}
<div className={sidebarOpen ? 'blur-content' : ''}>
  {/* Rest of the page content */}
</div>

    </>
  );
};

export default Navbar;
