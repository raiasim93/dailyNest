import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import UpcomingTask from "./UpcomingTask";
import CreateTitles from "./CreateTitles";

const CreateTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]); // state array to store the completed tasks.
  const [selectedDate, setSelectedDate] = useState(null); // stores the date selected
  const [isInputOpen, setIsInputOpen] = useState(false); // this is to change the state to toggle the add and date picker
  const [newTask, setNewTask] = useState({
    title: "",
    date: null,
    timestamp: null,
  });

  // array to store the tasks which have been completed
  const [tasks, setTasks] = useState([
    {
      title: "Finish React project",
      date: dayjs("2024-10-23"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Prepare for meeting",
      date: dayjs("2024-10-24"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Grocery shopping",
      date: dayjs("2024-10-25"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Write documentation",
      date: dayjs("2024-10-26"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Attend workshop",
      date: dayjs("2024-10-27"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Plan next week’s schedule",
      date: dayjs("2024-10-28"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Complete project presentation",
      date: dayjs("2024-10-29"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Submit project report",
      date: dayjs("2024-10-30"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Attend networking event",
      date: dayjs("2024-10-31"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Read industry articles",
      date: dayjs("2024-11-01"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Complete online course module",
      date: dayjs("2024-11-02"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Update resume",
      date: dayjs("2024-11-03"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Practice coding problems",
      date: dayjs("2024-11-04"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Join local tech meetup",
      date: dayjs("2024-11-05"),
      timestamp: new Date(),
      completed: false,
    },
    {
      title: "Volunteer for community service",
      date: dayjs("2024-11-06"),
      timestamp: new Date(),
      completed: false,
    },
  ]);

  // Update task title when input changes
  const handleInputChange = (event) => {
    setNewTask((prevTask) => ({
      ...prevTask,
      title: event.target.value,
    }));
  };

  // Handle submit to store the new task
  const handleSubmit = () => {
    if (newTask.title && selectedDate) {
      const currentTime = new Date();
      console.log(
        "Task Submitted:",
        newTask.title,
        "Date:",
        selectedDate.format("MM/DD/YYYY"),
        "Time:",
        currentTime.toLocaleTimeString()
      );
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          ...newTask,
          date: selectedDate,
          timestamp: currentTime,
        },
      ]);
      // Reset the input and date
      setNewTask({ title: "", date: null, timestamp: null });
      setSelectedDate(null);
      setIsInputOpen(false);
    }
  };
  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);

    // Add the completed task to the completedTasks state with completedDate
    const completedTask = {
      ...updatedTasks[index],
      completedDate: dayjs(), // Add completed date
    };

    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      completedTask,
    ]);
  };

  // const handleCompleteTask = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].completed = true;
  //   setTasks(updatedTasks);
  //   //add completed tasks to the completedTask state

  //   setCompletedTasks((prevCompletedTasks) => [
  //     ...prevCompletedTasks,
  //     { ...updatedTasks[i], completedDate: dayjs() }, // Include the completed status
  //   ]);
  // };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // calculating the numbers of completion
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const completionRate =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
   <>
    <CreateTitles
        completedCount={completedCount}
        totalCount={totalCount}
        completionRate={completionRate}
      />
      <div className="mb-5">
        <div className="row g-0 w-100">
          {/* create task section */}
          <section className="p-4 col-10 mx-auto bg-light text-secondary mb-3">
            <p className="fs-3 h-5 fw-normal">Add Task</p>

            <div className="row">
              <div className="col-12 mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 fs-5"
                    placeholder="Enter task"
                    value={newTask.title}
                    onClick={() => setIsInputOpen(true)} // Open the input form on click
                    onChange={handleInputChange} // Update task title on input change
                  />
                </div>
              </div>

              {/* Apply sliding animation */}
              <div className={`slide-container ${isInputOpen ? "show" : ""}`}>
                <div className="col-12 d-flex align-items-center">
                  <div className="col-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        className="w-100"
                        label="Pick a date"
                        value={selectedDate}
                        minDate={dayjs()}
                        onChange={(newDate) => setSelectedDate(newDate)}
                        textField={(params) => (
                          <input
                            {...params.inputProps}
                            className="form-control"
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <div className="col-4 d-flex justify-content-center align-items-stretch">
                      <button
                        className="btn btn-outline-primary w-100 p-3"
                        onClick={handleSubmit}
                      >
                        <DoneIcon />
                        <span className="d-none d-lg-inline"> Add </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <UpcomingTask
            tasks={tasks}
            handleCompleteTask={handleCompleteTask}
            handleRemoveTask={handleRemoveTask}
          />
          <section className="p-4 col-10 mx-auto bg-light">
            <h1>Task History</h1>
            <ul className="list-unstyled">
              {completedTasks.map((task, index) => (
                <li
                  key={index}
                  className="bg-white p-3 mb-2 border rounded d-flex justify-content-between align-items-center"
                >
                  <span>{task.title}</span>
                  <span>
                    Completed at {task.completedDate.format("hh:mm:ss")}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
   </>
  );
};

export default CreateTask;
