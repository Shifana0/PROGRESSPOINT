import React, { useState } from 'react';
import Navbar from '../../Components/User-components/Navbar';
import bmi2 from '../../assets/User-frontend/bmi2.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  
    const HandleNavigate = (path) => {
      navigate(path);
    };

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center bg-[#d2cec2]">

      <div className='w-[470px] h-[80vh] bg-white mt-18'>
        <div className='mt-10 '>
    <h1 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h1>
    </div>
    <div className='flex flex-col gap-6 mt-14 items-center'>
    <div>
      <label htmlFor="">weight :</label>
    <input
      type="number"
      placeholder="Weight (kg)"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      className="mb-2 p-2  ml-2 border border-gray-300 rounded"
    />
    </div>
    <div>
    <label htmlFor="">Height :</label>
    <input
      type="number"
      placeholder="Height (cm)"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      className="mb-2 p-2 ml-2 border border-gray-300 rounded"
    />
    </div>
    
    <div>
    <label htmlFor="">Age :</label>
    <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      className="mb-2 p-2 ml-7 border border-gray-300 rounded"
    />
    </div>
    </div>
    
    <div className="mb-4 ml-25 mt-5">
      <label className="mr-2">Gender: </label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="p-2 border border-gray-300 rounded w-[200px]"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
   
    </div>

    <button
      onClick={calculateBMI}
      className="bg-[#deaa0e] px-4 py-2 rounded ml-26 mt-2 w-[260px] cursor-pointer"
    >
      Calculate BMI
    </button>
    <button  className=" bg-[#deaa0e] px-4 py-2 rounded ml-26 mt-2 w-[260px] cursor-pointer" 
    onClick={() => HandleNavigate("/diet plans")}>
   
    Countinue
    </button>

    {bmi && (
      <div className="mt-4 ml-22">
        <p className="text-lg font-medium">Your BMI: {bmi}</p>
        <p className="text-lg">Category: {category}</p>
      </div>
    )}
    </div>
    <div className='w-[470px] h-[80vh] bg-amber-200 mt-18'>
  <img src={bmi2} alt="" className='h-[80vh]' />
</div>

  </div>
  );
}

export default Bmi;
