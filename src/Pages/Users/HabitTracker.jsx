import React, { useState, useEffect } from "react";
import Navbar from "../../Components/User-components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCheck, faCircleCheck, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

function HabitTracker() {
  const [calendar, setCalendar] = useState(false);
  const [habit, setHabit] = useState(""); 
  const [habitList, setHabitList] = useState([]);
  const [completedDiv ,setCompletedDiv]=useState(false)
  const [weeklyTask ,setWeeklyTask]=useState(false);
  const [blur ,setblur]=useState(false);
  const [weeklyHabit ,setweeklyHabit]=useState('')
  const [weeklyList ,setWeeklyList]=useState([])

  
useEffect(()=>{
  const saveData =JSON.parse(localStorage.getItem('tasks')) || []
  setHabitList(saveData)
},[])
 

useEffect(()=>{
  const saveData =JSON.parse(localStorage.getItem('week Tasks')) || []
  setWeeklyList(saveData)
},[])


  const handleCalendar = () => {
    setCalendar(!calendar);
  };


  const addHabit = () => {
    if (habit.trim() !== "") {
      const updatedList = [...habitList, { text: habit, status: false }];
      setHabitList(updatedList);
      localStorage.setItem("tasks", JSON.stringify(updatedList)); 
      setHabit(""); 
    }
  };
  
  const addWeeklyHabit =()=>{
    if(weeklyHabit.trim() !== ''){
      const updateWeek =[...weeklyList ,{text:weeklyHabit ,status :false}]
      setWeeklyList(updateWeek);
      localStorage.setItem('week Tasks' ,JSON.stringify(updateWeek))
      setweeklyHabit('')
    }
  }

  const weekComplete = (index) => {
    const updatedList = weeklyList.map((task, ind) =>
      ind === index ? { ...task, status: !task.status } : task
    );
    setWeeklyList(updatedList);
  };
  

  const handleComplete = (index) => {
    const updatedList = habitList.map((task, ind) =>
      ind === index ? { ...task, status: !task.status } : task
    );
    setHabitList(updatedList);
  };

  

  const removeHabit = (index) => {
    const updatedList = habitList.filter((_, i) => i !== index);
    setHabitList(updatedList);
    localStorage.setItem('tasks',JSON.stringify(updatedList))
    
  };

  const removeWeek = (index) => {
    const updateList = weeklyList.filter((_, ind) => ind !== index);
    setWeeklyList(updateList);
  };
  

  const removeComplete = () => {
    const updatedList = habitList.filter((task) => !task.status);
    setHabitList(updatedList);
  };
  

  return (
    <div>
      <Navbar iscolor={true} isText={true} />

      <div className="flex">
        <div className='w-[15%] min-h-screen fixed shadow-md '>
          <ul className="pt-22 font-semibold grid gap-2 pl-6">
            <li>Time Management</li>
            <li>Diet Plans</li>
            <li>Message</li>
            <li>Nutrition</li>
            <li onClick={handleCalendar}>
              Calendar <FontAwesomeIcon icon={faAngleDown} />
              {calendar && <Calendar />}
            </li>
          </ul>
        </div>

        <div className="w-[85%] mt-[80px] h-20 ml-58 shadow-md z-200 fixed">
          <div className="flex items-center gap-8 h-20 pl-26 font-semibold fixed w-full z-45">
           
            <button className="rounded-3xl w-[15%] h-10 shadow-md"onClick={()=>{
              setWeeklyTask(!weeklyTask)
              setblur(!blur)
            }} >
              ADD WEEKLY TASK
            </button>
            <button className="rounded-3xl w-[19%] h-10 shadow-md" onClick={()=>{
              setCompletedDiv(!completedDiv)
              setblur(!blur)
            }}>
              SHOW COMPLETED TASK
            </button>
            <select className="shadow-md h-10 rounded-3xl w-[15%]">
              <option value="">SHOW PROGRESS</option>
              <option value="">WEEKLY PROGRESS</option>
              <option value="">DAILY PROGRESS</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex mt-40 flex-col">
        <div className="w-[790px] h-[18vh] bg-[#e3ebe68a] ml-[15%]">
          <h1 className="font-bold ml-12 mt-4 text-2xl">DAILY TASKS</h1>
          <div>
            <input
              type="text"
              className="w-[70%] border mt-10 ml-28 p-2 rounded-3xl"
              value={habit}
              placeholder="Add Your Task Here..."
              onChange={(event) => setHabit(event.target.value)}
            />
            <button
              className="top-[3px] w-12 text-white rounded-3xl relative right-[55px] bg-[#4d493f]"
              onClick={addHabit}
            >
              <p className="text-2xl">+</p>
            </button>
          </div>
        </div>


        {completedDiv && (
  <div className="w-[60%] z-200 h-[70vh] bg-white absolute shadow-md left-64 top-44 rounded-2xl">
    <FontAwesomeIcon 
      icon={faXmark} 
      className="absolute right-[-20px] text-2xl cursor-pointer" 
      onClick={() => setCompletedDiv(false)}
    />

    <h1 className="text-2xl font-bold mt-4 text-center">Completed Tasks</h1>

    {habitList.some((task) => task.status === true) ? (
      <div className="grid grid-cols-2 gap-4 mt-10">
        {habitList
          .filter((task) => task.status === true)
          .map((task, index) => (
            <div key={index} className="shadow-md rounded-2xl p-4 bg-white flex justify-between">
              {task.text}
              <button className="shadow-lg w-[20%]">
                <FontAwesomeIcon icon={faCircleCheck}/> Done
              </button>
            </div>
          ))}
      </div>
    ) : (
      <p className="text-center mt-10 text-gray-500">No completed tasks yet.</p>
    )}
  </div>
)}

{weeklyTask && (
  <div className="w-[60%] h-[70vh] bg-white z-200 absolute shadow-md left-64 top-44 rounded-2xl">
    <div>
      <h1 className="font-bold mt-5 ml-10 text-2xl text-center">Add Weekly Task</h1>
      <input 
        type="text" 
        value={weeklyHabit} 
        onChange={(event) => setweeklyHabit(event.target.value)}   
        className="w-[55%] border mt-5 ml-56 p-2 rounded-3xl" 
        placeholder="Add your Task here..."
      />
      <button
        className="top-[3px] w-12 text-white rounded-3xl relative right-[55px] bg-[#4d493f]"
        onClick={addWeeklyHabit}
      >
        <p className="text-2xl">+</p>
      </button>
    </div>

  
    <div className="flex flex-col mt-4 ">
      {weeklyList.map((task, index) => (
        <div key={index} className="bg-[#e3ebe68a] flex items-center w-[53%] ml-58 shadow-md h-12 p-2 m-2 rounded-md justify-between">
          <div>
          <input type="checkbox" className="mr-2" onClick={ ()=>{weekcomplete(index)}} />
          <p className="inline">{task.text}</p>
          </div>
          <button className="bg-[#4d493f] w-12 rounded-xl h-8"
          onClick={()=>{
            removeWeek(index)
          }}><FontAwesomeIcon icon={faTrash} className="text-white"/></button>
        </div>
      ))}
    </div>
  </div>
)}





        <div className="bg-[#e3ebe68a] w-[790px] h-[60vh] ml-[15%] overflow-y-scroll flex flex-col gap-10">

    
          <div className="w-full flex flex-col gap-4 mt-8">
            {habitList.map((task, index) => (
              <div
                key={index}
                className={`w-2/4 h-16 ml-54  bg-white shadow-md flex justify-between items-center rounded-2xl ${
                  task.status ? "line-through" : ""
                }`}
              >
                <div>
                  <input
                    type="checkbox"
                    className="ml-4"
                    checked={task.status}
                    onChange={() => handleComplete(index)}
                 onClick={removeComplete} />
                  <p className="ml-4 font-semibold inline">{task.text}</p>
                </div>
                <button
                  className="p-1 w-12 rounded-2xl bg-[#4d493f] mr-2"
                  onClick={() => removeHabit(index)}
                >
                  <FontAwesomeIcon icon={faTrash} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className='w-2/6 h-[78vh] fixed absolute right-0 shadow-md'>
          <div className="w-4/4 h-[40vh] shadow-md flex flex-col justify-center">
            <p className="font-bold text-8xl text-center mb-3">
              {new Date().getDate()}
            </p>
            <p className="font-semibold text-xl text-center">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
              })}
            </p>
          </div>
          <div>
            <Calendar className="ml-2 w-[190%]" />
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default HabitTracker;