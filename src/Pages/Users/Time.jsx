import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/User-components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from './../../Components/User-components/Footer'

function Time() {
  const [tasks, setTasks] = useState([]);
  const [taskTime, setTaskTime] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskName, setTaskName] = useState('');

  const [todayVisible, setTodayVisible] = useState(false);
  const [upcomingVisible, setUpcomingVisible] = useState(false);
  const [completedVisible, setCompletedVisible] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleCheck = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, status: !task.status };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask = { name: taskName, time: taskTime, date: taskDate, status: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      setTaskName('');
      setTaskTime('');
      setTaskDate('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <Navbar iscolor={true} isText={true} />
      <div className="w-full h-screen bg-[#f9f7f2] flex">
        {/* Sidebar */}
        <div className="w-[300px] h-screen shadow-md pt-20">
          <ul className="list-none space-y-2 ml-4 font-semibold mt-4 text-[#4d493f] cursor-pointer">
            <li onClick={() => setTodayVisible(!todayVisible)}>
              Today <FontAwesomeIcon icon={faAngleDown} className="ml-38" />
              {todayVisible &&
                tasks.filter((task) => task.date === today).map((task, index) => <p key={index}>{task.name}</p>)}
            </li>

            <li onClick={() => setUpcomingVisible(!upcomingVisible)}>
              Upcoming <FontAwesomeIcon icon={faAngleDown} className="ml-28" />
              {upcomingVisible &&
                tasks
                  .filter((task) => task.date > today)
                  .map((task, index) => <p key={index}>{task.name}</p>)}
            </li>

            <li onClick={() => setCompletedVisible(!completedVisible)} >
              Completed <FontAwesomeIcon icon={faAngleDown} className="ml-28" />
              {completedVisible &&
                tasks.filter((task) => task.status).map((task, index) => <p key={index}>{task.name}</p>)}
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full h-screen">
          {/* Add Task Section */}
          <div className="w-[73%] rounded-2xl shadow-2xl mt-30 h-70 bg-white ml-20 p-5">
            <p className="text-xl font-bold">Add New Task</p>
            <input
              type="text"
              className="border mt-4 p-2 w-3/4"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="mt-3">
              <input
                type="time"
                className="border p-2 w-2/4"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
              <input
                type="date"
                className="border p-2 ml-5 w-[210px]"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
            <button className="w-3/4 bg-[#4d493f] text-white mt-4 p-2 cursor-pointer" onClick={handleAddTask}>
              Add Task
            </button>
          </div>

          {/* Task List Section */}
          <div className="w-[73%] rounded-2xl shadow-2xl mt-14 min-h-34 bg-white ml-20 overflow-y-scroll scrollbar-hide p-5">
            <h1 className="text-2xl font-bold sticky top-0 bg-white z-10">Task List</h1>
            {tasks.length > 0 ? (
              <ul className="mt-5">
                {tasks.map((task, index) => (
                  <li key={index} className="ml-10 mt-5">
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        <input
                          type="checkbox"
                          checked={task.status}
                          onChange={() => handleCheck(index)}
                        />
                        <p className={`font-semibold text-xl ${task.status ? 'line-through text-gray-400' : ''}`}>
                          {task.name}
                        </p>
                      </div>
                      <button
                        className="bg-[#4d493f] p-2 rounded-2xl w-[60px] text-white cursor-pointer"
                        onClick={() => handleDeleteTask(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    <p className="text-md text-gray-500">{task.date} | {task.time}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500 mt-16">No tasks yet</p>
            )}
          </div>
        </div>
      </div>
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  );
}

export default Time;
