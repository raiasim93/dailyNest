import React, { useState } from 'react';
import { GitHub, Instagram } from '@mui/icons-material';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      email: '',
      password: ''
    });
    console.log(form.email);
    console.log(form.password);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 col-lg-4 col-md-8 col-sm-10 shadow-lg position-relative">
        {/* Close Button */}
        <CloseIcon 
          className="position-absolute top-0 end-0 m-2 text-danger" 
          style={{ cursor: 'pointer' }} 
          onClick={handleClose}
        />

        {/* Header */}
        <div className="text-center mb-4">
          <h3>Sign Up for DailyNest</h3>
          <p>
            Already have an account? 
            <a href="#" className="text-success ms-2">Login</a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter Email"
              onChange={handleChange} 
              value={form.email} 
              name="email" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password"
              onChange={handleChange} 
              value={form.password} 
              name="password" 
              required 
            />
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-success btn-block">Continue</button>
          </div>
        </form>

        {/* OAuth Sign-in Option */}
        <div className="text-center">
          <p className="text-decoration-underline mb-3">Or sign up with</p>
          <div className="d-flex justify-content-center">
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
  );
};

export default LoginPage;
