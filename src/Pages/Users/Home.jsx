
import React from 'react';
import home1 from '../../assets/User-frontend/home1.jpg';
import time from '../../assets/User-frontend/time.jpg';
import fd from '../../assets/User-frontend/fd.jpg';
import nutrition from '../../assets/User-frontend/nutrition1.jpg';
import Navbar from '../../Components/User-components/Navbar';
import Footer from '../../Components/User-components/Footer';

function Home1() {
  return (
    <div className="bg-[#f4f4f4]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center bg-gradient-to-r from-[#4d493f] to-[#2c2a25] text-white px-16">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-snug">Growing Up with Us</h1>
          <p className="mt-5 text-lg opacity-80">
            Stay on top of your goals by tracking your daily habits, helping you stay motivated and consistent.
          </p>
          <button className="mt-6 bg-[#ffb400] hover:bg-[#e0a000] text-black font-bold py-3 px-6 rounded-full shadow-lg">
            Start Your Journey
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={home1} alt="hero" className="w-[500px] h-[550px] rounded-lg shadow-xl" />
        </div>
      </div>

      {/* Time Management Section */}
      <div className="w-full py-20 flex items-center px-16 bg-white">
        <div className="w-1/2">
          <img src={time} alt="Time Management" className="w-[500px] h-[500px] rounded-lg shadow-md" />
        </div>
        <div className="w-1/2 pl-10">
          <h2 className="text-4xl font-bold text-[#4d493f]">Manage Your Time Efficiently</h2>
          <p className="mt-5 text-lg opacity-70">
            Set reminders, create to-do lists, and receive voice notifications to ensure you stay on schedule.
          </p>
          <button className="mt-6 bg-[#ffb400] hover:bg-[#e0a000] text-black font-bold py-3 px-6 rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Healthy Lifestyle Section */}
      <div className="w-full py-20 bg-[#f8f9fa] text-center px-16">
        <h2 className="text-4xl font-bold text-[#4d493f]">Guide Your Dream Lifestyle</h2>
        <div className="flex justify-center gap-10 mt-10">
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src={time} alt="Habit Tracker" className="w-full h-[350px] rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">Habit Tracker</h3>
            <p className="mt-2 text-sm opacity-70">Track your daily habits to stay consistent and motivated.</p>
            <button className="mt-4 bg-[#4d493f] hover:bg-[#3a3730] text-white font-bold py-2 px-4 rounded-full">
              Start Tracking
            </button>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src={fd} alt="Meal Plan" className="w-full h-[350px] rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">Custom Diet Plan</h3>
            <p className="mt-2 text-sm opacity-70">Personalized meal plans to achieve your health goals.</p>
            <button className="mt-4 bg-[#4d493f] hover:bg-[#3a3730] text-white font-bold py-2 px-4 rounded-full">
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Nutrition Section */}
      <div className="w-full py-20 flex items-center px-16 bg-white">
        <div className="w-1/2">
          <img src={nutrition} alt="Nutrition" className="w-[500px] h-[500px] rounded-lg shadow-md" />
        </div>
        <div className="w-1/2 pl-10">
          <h2 className="text-4xl font-bold text-[#4d493f]">Personalized Nutrition at Your Fingertips</h2>
          <p className="mt-5 text-lg opacity-70">
            Access expert advice, meal ideas, and tips to fuel your body with the right foods.
          </p>
          <button className="mt-6 bg-[#ffb400] hover:bg-[#e0a000] text-black font-bold py-3 px-6 rounded-full shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home1;


import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Time() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Complete React project', time: '2:00 PM', dueDate: '2025-01-30' },
    { id: 2, task: 'Meeting with Team', time: '4:00 PM', dueDate: '2025-01-30' },
    { id: 3, task: 'Go to the gym', time: '6:00 AM', dueDate: '2025-01-31' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  const handleAddTask = () => {
    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      time: taskTime,
      dueDate: taskDueDate,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setTaskTime('');
    setTaskDueDate('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Optional */}
      <div className="w-1/4 bg-white p-6 shadow-md space-y-6">
        <h2 className="text-xl font-semibold">Task Filters</h2>
        <ul className="space-y-2">
          <li><button className="text-blue-500">Today</button></li>
          <li><button className="text-blue-500">Upcoming</button></li>
          <li><button className="text-blue-500">Completed</button></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-center">Time Management</h1>

        {/* Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <Calendar
            onChange={(date) => setDate(date)}
            value={date}
            className="react-calendar rounded-lg border border-gray-300 shadow-md"
          />
        </div>

        {/* Task List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Task List</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{task.task}</h3>
                  <p className="text-sm text-gray-500">{task.time} - Due: {task.dueDate}</p>
                </div>
                <button className="bg-blue-500 text-white py-1 px-3 rounded-md">Edit</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add New Task */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Task name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="flex gap-4">
              <input
                type="time"
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
              <input
                type="date"
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                value={taskDueDate}
                onChange={(e) => setTaskDueDate(e.target.value)}
              />
            </div>
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;