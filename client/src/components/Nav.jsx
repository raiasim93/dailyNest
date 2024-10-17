import React, { useState } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <>
    <div className='g-0 navbar-custom  py-4 d-flex'> 
    <div className="row w-100  ">
      <div className="col-10 mx-auto d-flex">
      <div className='col-6' >
             <ChecklistIcon fontSize='large' className='text-white pointer' />
             <Link to="/" className='h3 text-decoration-none ms-2 text-white align-middle pointer'>
                DailyNest
              </Link>
        </div>
        <div className='col-6 d-flex justify-content-end align-items-center pe-0'>
              <div className="d-md-none">
                <MenuIcon fontSize='large' className='text-white pointer' onClick={toggleSidebar} />
              </div>
            <Link to="/login" className='btn btn-custom-button border ms-3 d-none d-md-block'> <LoginIcon/> Log In </Link>
            <Link to="/login" className='btn btn-custom-button border ms-3 d-none d-md-block'> <AccountCircleIcon/> Create Account </Link>
        </div>
      </div> 
    </div>       
    </div>
    
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="d-flex justify-content-between align-items-center p-3">
          <h2 className='text-white'> DailyNestt </h2>
          <CloseIcon className='text-white pointer' onClick={toggleSidebar} />
      </div>
      <div className="sidebar-links">
          <Link to ="login" className='p-3 mb-2 border d-md-none  text-center text-white fs-3 d-block w-100'> Log In  </Link>
          <Link to ="login" className="p-3 mb-2 border d-md-none  text-center text-white fs-3 d-block w-100" > Create Account </Link>
          {/* render if user is already logged in  */}
          <a className='p-3 mb-2 border d-md-none  text-center text-white fs-3 d-block w-100'> History  </a>
          <a className="p-3 mb-2 border d-md-none  text-center text-white fs-3 d-block w-100"> Logout </a>
      </div>
      </div>
      
    </>
    
  )
}

export default Navbar;