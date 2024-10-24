import React from 'react';
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";

const UpcomingTask = ({tasks, handleCompleteTask, handleRemoveTask}) => {
  return (
    <>
     {/* upcoming tasks section */}
     <section className="p-4 col-10 mx-auto bg-light text-secondary fw-normal">
          <p className="fs-1 text-dark">Upcoming Tasks</p>
          <div className="row">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <div key={index} className="col-12 mb-3">
                  <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded">
                    <div className="d-flex flex-column">
                      <p
                        className={
                          task.completed
                            ? "fs-4 text-decoration-line-through"
                            : "fs-4"
                        }
                      >
                        {task.title}
                      </p>
                      <small>
                        Due: {dayjs(task.date).format("MM/DD/YYYY")}
                      </small>
                      <small>
                        Created:{" "}
                        {dayjs(task.timestamp).format("MM/DD/YYYY hh:mm A")}
                      </small>
                    </div>
                    <div className="d-flex">
                      <button
                        className="btn btn-outline-success btn-sm mx-1"
                        onClick={() => handleCompleteTask(index)}
                        disabled={task.completed}
                      >
                        <DoneIcon />{" "}
                        <span className="d-none d-md-inline"> Complete </span>
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm mx-1"
                        onClick={() => handleRemoveTask(index)}
                      >
                        <DeleteIcon />{" "}
                        <span className="d-none d-md-inline"> Remove </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No tasks available.</p>
              </div>
            )}
          </div>
        </section></>
  )
}

export default UpcomingTask