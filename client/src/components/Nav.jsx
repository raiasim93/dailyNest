import React from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';

const Navbar = () => {
  return (
    <div className='screen-sizing border-bottom py-4 d-flex'> 
    <div className="row w-100 ">
    <div className='col-6' >
             <ChecklistIcon fontSize='large' className='text-color-secondary pointer' />
            <a className='h3 text-decoration-none ms-2 text-color-secondary align-middle pointer' > DailyNest </a>
        </div>
        <div className='col-6 d-flex justify-content-end align-items-center pe-0'>
            <button className='btn bg-button-login border ms-2'> Log In </button>
            <button className='btn bg-secondary ms-2' > Create Account </button>
        </div>
    </div>       
    </div>
  )
}

export default Navbar;