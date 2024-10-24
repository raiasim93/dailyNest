import React from 'react'
import landingImage from  '../assets/landingImage.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Landing = () => {
    const hanldeClickCreateList = () => {
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div className='g-0'>

            <div className="row g-0 w-100 primary-color">
                <div className="col-10 mx-auto">
                    <div className=" p-5 row text-white fs-sm-6 d-flex justify-content-center align-items-center">
                         
                    {/* first column to give app info  */}
                    <div className="col-lg-6 col-sm-12 order-2 order-lg-1 text-center">
                        <div className="row">
                        <div className="p-3 mb-3 col-sm-12 col-md-12 mx-auto">
                            <h1 className='display-4 fw-bold text-white mb-5'>Simplify Your Day</h1>
                            <p className='fs-5 mt-3'>
                                Stay organized and on top of your tasks with DailyNest, the smart to-do list app designed to help you achieve more with less stress.
                            </p>
                        </div>
                        </div>
                        
                    <div className='text-center'>
                        <button onClick={hanldeClickCreateList} className="p-3 rounded-pill fw-bold btn btn-custom-button-animated ">
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