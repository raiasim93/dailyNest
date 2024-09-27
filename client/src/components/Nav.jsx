import React from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className=' navbar-custom py-4 d-flex'> 
    <div className="row w-100  ">
      <div className="col-10 mx-auto d-flex">
      <div className='col-6' >
             <ChecklistIcon fontSize='large' className='text-white pointer' />
            <a className='h3 text-decoration-none ms-2 text-white align-middle pointer' > DailyNest </a>
        </div>
        <div className='col-6 d-flex justify-content-end align-items-center pe-0'>
            <button className='btn bg-button-login border ms-3'> <LoginIcon/> Log In </button>
            <button className='btn bg-account-button border ms-3' > <AccountCircleIcon/> Create Account </button>
        </div>
      </div>
        
    </div>       
    </div>
  )
}

export default Navbar;