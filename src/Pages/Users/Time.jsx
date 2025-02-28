import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/User-components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faAngleUp, faTrash } from '@fortawesome/free-solid-svg-icons';
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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
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
  {/* Today Section */}
  <li onClick={() => setTodayVisible(!todayVisible)}>
    Today <FontAwesomeIcon icon={todayVisible ? faAngleUp : faAngleDown} className="ml-37" />
    {todayVisible && (
      <div>
        {tasks.filter((task) => task.date === today).length > 0 ? (
          tasks
            .filter((task) => task.date === today)
            .map((task, index) => <p key={index}>{task.name}</p>)
        ) : (
          <p className="text-gray-500 text-sm mt-2">No tasks yet</p>
        )}
      </div>
    )}
  </li>

  {/* Upcoming Section */}
  <li onClick={() => setUpcomingVisible(!upcomingVisible)}>
    Upcoming <FontAwesomeIcon icon={upcomingVisible ? faAngleUp : faAngleDown} className="ml-[116px]" />
    {upcomingVisible && (
      <div>
        {tasks.filter((task) => task.date > today).length > 0 ? (
          tasks
            .filter((task) => task.date > today)
            .map((task, index) => <p key={index}>{task.name}</p>)
        ) : (
          <p className="text-gray-500 text-sm mt-2">No tasks yet</p>
        )}
      </div>
    )}
  </li>

  {/* Completed Section */}
  <li onClick={() => setCompletedVisible(!completedVisible)}>
    Completed <FontAwesomeIcon icon={completedVisible ? faAngleUp : faAngleDown} className="ml-28" />
    {completedVisible && (
      <div>
        {tasks.filter((task) => task.status).length > 0 ? (
          tasks
            .filter((task) => task.status)
            .map((task, index) => <p key={index}>{task.name}</p>)
        ) : (
          <p className="text-gray-500 text-sm mt-2">No completed tasks yet</p>
        )}
      </div>
    )}
  </li>
</ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full h-screen">
          {/* Add Task Section */}
          <div className="w-[73%] rounded-2xl shadow-2xl mt-30 h-70 bg-white ml-20 p-5">
            <p className="text-xl font-bold text-center">Add New Task</p>
            <input
              type="text"
              className="border mt-4 p-2 w-3/4 ml-24"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="mt-3">
              <input
                type="time"
                className="border p-2 w-2/4 relative left-24"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
              <input
                type="date"
                className="border p-2 relative left-26 w-[210px]"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
            <button className="w-3/4 bg-[#4d493f] text-white mt-4 p-2 ml-24 cursor-pointer" onClick={handleAddTask}>
              Add Task
            </button>
          </div>

          <div className="w-[73%] rounded-2xl shadow-2xl mt-14  ml-20">
  {/* Sticky Header */}
  <div className=" sticky top-0 h-16 flex items-center justify-center shadow-md z-10 border-b-2 border-gray-300">
    <h1 className="text-xl font-bold text-gray-800">Task List</h1>
  </div>

  {/* Task List - Scrollable Area with Reduced Height */}
  <div className="max-h-[300px] min-h-[150px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    {tasks.length > 0 ? (
      <ul className="mt-3 space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-md">
            {/* Left Side (Checkbox + Task Name) */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => handleCheck(index)}
                className="h-4 w-4 accent-amber-700 cursor-pointer"
              />
              <p className={`font-semibold text-md ml-3 ${task.status ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.name}
              </p>
            </div>

            {/* Right Side (Delete Button + Date) */}
            <div className="flex items-center">
              <p className="text-sm text-gray-500 mr-3">{task.date} | {task.time}</p>
              <button
                className="bg-red-600 hover:bg-red-700 transition text-white p-2 rounded-lg w-8 flex justify-center items-center"
                onClick={() => handleDeleteTask(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500 mt-8">No tasks yet</p>
    )}
  </div>
</div>



        </div>
      </div>
      <div className='mt-20'>
      <Footer/>
      </div>
    </div>
  );
}

export default Time;
