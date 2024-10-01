import React, { useState } from 'react';
import '../../styles/Login.css';
import { GitHub, Instagram } from '@mui/icons-material';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
        email: '',
        password: ''
    })
    console.log(form.email);
    console.log(form.password);
  }
  return (
    <div className='login-page-container mx-auto d-flex justify-content-center align-items-center'>
      <div className="m-4 row w-100">
        <div className="p-4 col-sm-8 col-lg-5 rounded border  login-wrapper text-white mx-auto d-flex flex-column">
          <div className="login-header mb-3 flex-grow-1">
            <h3 className='text-center'>Sign Up for DailyNest</h3>
            <p className='text-center'>
              Already have an account? 
              <a className='ms-3 text-success'> Login </a>  
            </p>
            <CloseIcon className='close-button'/>
          </div>
          {/* Form starts here */}
          <form className="flex-grow-1 d-flex flex-column mt-3" onSubmit={handleSubmit}>
            <div className="form-group mb-4"> {/* Margin bottom for spacing */}
              <label htmlFor='email' className="d-block">Email Address</label>
              <input type='email' id='email' className="form-control" placeholder='Enter Email' 
              onChange={handleChange} value={form.email} name='email'/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor='password' className="d-block">Password</label>
              <input type='password' id='password' className="form-control" placeholder='Password' 
              onChange={handleChange} value={form.password} name='password' />
            </div>
            <div className='col-8 mt-3 mx-auto mb-4'>
              <button type='submit' className='btn btn-success w-100'>Continue</button>
            </div>
          </form>

        {/* oauth signin option */}
          <div className="login-oAuth flex-grow-1 d-flex flex-column align-items-center">
            <p className='text-decoration-underline'>Or sign up with</p>
            <div className="d-flex  justify-content-center">
              <Button
                variant="contained"
                color="primary"
                startIcon={<Instagram />}
                className="mx-2"
              >
                Instagram
              </Button>
              <Button
                variant="contained"
                color="default"
                startIcon={<GitHub />}
                className="mx-2"
            
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
