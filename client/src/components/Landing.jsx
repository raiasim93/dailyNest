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
    <div className='screen-sizing p-4 border-bottom'>
        <div className="row text-white fs-sm-6 d-flex justify-content-center align-items-center">
        <h1 className=' text-center text-warning text-small-left mb-2 mb-lg-5 pb-3 border-bottom'> Free CheckList Maker </h1>
            {/* first column to give app info  */}
            <div className="col-lg-6 col-sm-12 order-2 order-lg-1 text-center">
               
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
                    
                }
                <div className='text-center'>
                <button className="btn btn-success">
                    Create your Checklist 
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
                    className='rounded'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing;