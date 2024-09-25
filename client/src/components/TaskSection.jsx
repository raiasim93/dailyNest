import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const TaskSection = () => {
    const checklistData = [
        {
            title: "",
            description: "",
            quantity: "",
            dueDate: "",
        }
    ]
  return (
    <div className='screen-sizing'>
       <h1 className='text-center text-white py-3 '> Your Tasks </h1>
        <div className="row d-flex justify-content-center align-items-center mb-4">
            <div className="col-10 d-flex justify-content-between">
                <h2 className='text-white'> Checklist </h2>
                <button className='btn btn-info px-4 text-emphasis text-white'> Create Your Checklist <ChevronRightIcon/> </button> 
            </div>
            
        </div>
    </div>
  )
}

export default TaskSection;