import React, {useEffect, useState} from 'react';
import '../../styles/CreateList.css';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const CreateList = () => {
    // setting up usestate to store the current day and date
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');
      // updating everytime the page reloads
      useEffect(()=> {
        const today = new Date();
        const date = today.toLocaleDateString('en-CA');;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = days[today.getDay()];
        setCurrentDate(date);
        setCurrentDay(dayOfTheWeek);
      }, []);
      
  return (
    <div className='g-0 create-list-wrapper d-flex flex-1 justify-content-center align-items-center text-secondary'>
        <div className="row create-list-container w-100 mb-0 ">
          {/* task alert */}
          <section className="g-0 col-10 mt-5 mb-5 mx-auto d-flex justify-content-center">
            <h2 className='fs-2 text-warning'> You have no taks due to day </h2>
          </section>
          {/* header/title for the section */}
          <section className="p-sm-2 p-md-4 col-10 mx-auto create-list-content">
            <div className="row d-flex justify-content-between align-items-center content-header-section box-shadow py-4">
              {/* First column (date section) */}
              <div className="col-12 col-md-6 d-flex flex-column text-center text-md-start">
                <div className="col-12 mb-sm-2 mb-md-4 text-dark">
                  <h6 className='fs-2'> Today </h6>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-center justify-content-md-start align-items-center text-secondary">
                    <h6 className='fs-3 me-2'> {currentDate}, </h6>
                    <h6 className='fs-3' > {currentDay} </h6>
                  </div>    
                </div>
              </div>
    
              {/* Second column (buttons section) */}
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center mt-3">
                <a href="/favorites" className="ms-3 btn btn-custom-button"> <LabelImportantIcon /> Important </a>
                <a href="/upcoming" className="ms-3 btn btn-custom-button"> <UpcomingIcon /> Upcoming </a>
                <a href="/completed" className="ms-3 btn btn-custom-button"> <HistoryIcon /> History </a>
              </div>
              </div>
            </section>

          {/* Input Field */}
          <section className="py-sm-3 py-md-5 col-10  mx-auto">
            <div className="row">
                <div className="col-12 mb-sm-2 mb-md-4 text-dark">
                  <h6 className="fs-2">Add Task</h6>
                </div>
                <div className="col-12 g-0 mb-3">
                  <div className="input-group">
                    {/* Icons inside input field */}
                    <span className="input-group-text">
                      <CalendarTodayIcon />
                    </span>
                    {/* Input for Task Title */}
                    <input 
                      type="text" 
                      className="form-control custom-height-input fs-5" 
                      placeholder="Enter task title" 
                    />
                    <span className="input-group-text">
                      <EditIcon />
                    </span>
                    <span className="input-group-text">
                      <DoneIcon />
                    </span>
                  </div>
              </div>
            </div>
          </section>
          
        </div>
    </div>
  )
}

export default CreateList;