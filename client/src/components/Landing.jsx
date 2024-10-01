import React from 'react'
import landingImage from  '../assets/landingImage.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const Landing = () => {
  return (
    <div className='g-0'>

            <div className="row g-0 w-100 primary-color">
                <div className="col-10 mx-auto">
                    <div className="mt-sm-3 mt-lg-5 p-3 row text-white fs-sm-6 d-flex justify-content-center align-items-center">
                         
            {/* first column to give app info  */}
            <div className="col-lg-6 col-sm-12 order-2 order-lg-1 text-center">
                <div className="row">
                <div className="p-3 mb-3 col-sm-6 col-md-12 mx-auto">
                    <h1 className='display-4 fw-bold text-info'>Simplify Your Day</h1>
                    <p className='fs-5'>
                        Stay organized and on top of your tasks with DailyNest, the smart to-do list app designed to help you achieve more with less stress.
                    </p>
                </div>
                </div>
                
            <div className='text-center'>
                <button className="btn btn-info btn-lg text-white">
                    Create Your Checklist 
                    <ChevronRightIcon />
                </button>
            </div>
                
            </div>
            
            {/* right column for image  */}
            <div className="d-flex justify-content-center align-items-center col-lg-6 my-5 col-sm-12 order-1 order-lg-2 ">
                <div className="d-flex justify-content-center align-items-center w-70 h-70 ">
                    <img 
                    src={landingImage}
                    alt="Landing"
                    style={{
                        width: '80%',
                        height: '80%',
                        objectFit: 'cover', 
                        opacity: 0.6 // Ensure it covers the div and is responsive
                    }}
                    className='rounded-circle landingImage'/>
                </div>
            </div>
                    </div>
                </div>
            </div>
            
           
        </div>
   
  )
}

export default Landing;