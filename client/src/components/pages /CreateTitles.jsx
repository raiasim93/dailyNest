import React, { useEffect, useState } from 'react';
import '../../styles/CreateList.css';



const CreateTitles = ({completedCount, totalCount, completionRate}) => {
  // Setting up useState to store the current day and date
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  // Updating every time the page reloads
  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString('en-CA');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfTheWeek = days[today.getDay()];
    setCurrentDate(date);
    setCurrentDay(dayOfTheWeek);
    
  }, []);

  return (
    <div className="g-0  d-flex  justify-content-center align-items-center text-secondary ">
      <div className="row  w-100 mb-0">
        <section className="p-4 col-10  mx-auto bg-light mb-3">
          <div className="row d-flex justify-content-between align-items-center content-header-section box-shadow p-4">
            {/* First column (date section) */}
            <div className="col-12 col-md-6 d-flex flex-column text-center text-md-start mb-sm-3 mb-md-0">
              <div className="col-12 mb-2 mb-md-4 text-dark">
                <p className="fs-1 fw-normal mb-0">{currentDay}</p>
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-center justify-content-md-start align-items-center text-secondary">
                  <p className="fs-4 fw-normal me-2 mb-0">{currentDate}</p>
                </div>
              </div>
            </div>

            {/* Second column (buttons section) */}
            {/* Progress bar - set to display first on small screens */}
            <div className="col-12 col-md-6 d-flex flex-row flex-md-column align-items-center justify-content-center">
              <p className="fs-2 fw-normal mb-3 d-none d-md-block">
                Task Status
              </p>
              <p className="fw-normal text-nowrap ">
                Task Completed
                <span className="text-success fs-3 me-3"> {completedCount} / {totalCount} </span>
              </p>
              <p className="fw-normal text-nowrap">
                Completion Rate
                <span className="text-success fs-3 me-3"> {completionRate}% </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateTitles;
