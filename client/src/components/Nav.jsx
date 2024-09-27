import React, { useState } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <>
    <div className=' navbar-custom py-4 d-flex'> 
    <div className="row w-100  ">
      <div className="col-10 mx-auto d-flex">
      <div className='col-6' >
             <ChecklistIcon fontSize='large' className='text-white pointer' />
            <a className='h3 text-decoration-none ms-2 text-white align-middle pointer' > DailyNest </a>
        </div>
        <div className='col-6 d-flex justify-content-end align-items-center pe-0'>
              <div className="d-md-none">
                <MenuIcon fontSize='large' className='text-white pointer' onClick={toggleSidebar} />
              </div>
            <a className='btn bg-button-login border ms-3 d-none d-md-block'> <LoginIcon/> Log In </a>
            <a className='btn bg-account-button border ms-3 d-none d-md-block' > <AccountCircleIcon/> Create Account </a>
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
          <a className='p-3 mb-2   border d-md-none text-decoration-none text-center text-white fs-3 d-block w-100'> Log In  </a>
          <a className="p-3  mb- 2 border d-md-none text-decoration-none text-center text-white fs-3   d-block w-100"> Create Account </a>
      </div>
      </div>
      
    </>
    
  )
}

export default Navbar;