import React from 'react'
import landingImage from  '../assets/landingImage.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const Landing = () => {
    const appBenefits = [
        {
            id: 1,
            title: "Stay Organized Effortlessly",
            desc: "DailyNest simplifies your day with an easy-to-use interface"
        },
        {
            id: 2,
            title: "Track Your Progress",
            desc: "See your achievements in real-time with checklists.",
        },
        {
            id: 3,
            title: "Boost Productivity",
            desc: "Prioritize your tasks and focus on what matters most."
        }
    ]
  return (
    <div className='screen-sizing py-4 border-bottom '>
        <div className="mt-sm-3 mt-lg-5 p-3 row text-white fs-sm-6 d-flex justify-content-center align-items-center">
            
            {/* first column to give app info  */}
            <div className="col-lg-6 col-sm-12 order-2 order-lg-1 text-center">
{/*                
                {
                    appBenefits.map((item,index)=> {
                        return(
                            <>
                                <div className="p-1 mb-2 mb-lg-3">
                                <h2> {item.title} </h2>
                                <p>  <HorizontalRuleIcon/>  {item.desc} </p>
                                </div>
                               
                            </>
                        )
                    })
                    
                } */}
                <div className="p-3 mb-3 col-sm-8 col-md-12 mx-auto">
                <h1 className='display-4 fw-bold text-info'>Simplify Your Day</h1>
                <p className='fs-5'>
                    Stay organized and on top of your tasks with DailyNest, the smart to-do list app designed to help you achieve more with less stress.
                </p>
            </div>
            <div className='text-center'>
                <button className="btn btn-success btn-lg">
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
  )
}

export default Landing;