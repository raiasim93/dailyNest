import React, { useState } from 'react'
import '../../styles/Login.css'

const LoginPage = () => {
 
  return (
    <div className='login-page-container mx-auto d-flex justify-content-center align-items-center'>
        <div className="m-4 row justify-content-center w-100">
            <div className="p-4 row col-md-5 login-wrapper text-white ">
                <div className="login-header">
                    <h3> 
                        Sign Up for DailyNest
                     </h3>
                    <p> 
                    Already have an account? 
                    <span className='ms-3 text-primary'>
                        Login
                    </span>
                    </p>
            </div>
              
           </div>
        </div>
          
           
    </div>
  )
}

export default LoginPage;