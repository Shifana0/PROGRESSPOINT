

import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useRef } from 'react'
import home1 from '../../assets/User-frontend/home1.jpg'
import time1 from '../../assets/User-frontend/time1.jpg'
import time from '../../assets/User-frontend/time.jpg'
import time2 from '../../assets/User-frontend/time2.jpg'
import time3 from '../../assets/User-frontend/time3.jpg'
import woman2 from '../../assets/User-frontend/woman2.jpg'
import ban1 from '../../assets/User-frontend/ban1.jpg'
import graph from '../../assets/User-frontend/graph.jpg'
import fd from '../../assets/User-frontend/fd.jpg'
import nutrition from '../../assets/User-frontend/nutrition1.jpg'
import Navbar from '../../Components/User-components/Navbar'
import Footer from '../../Components/User-components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react'
import axios from 'axios'
import habit from '../../assets/User-frontend/habit.jpg'
import productivity1 from '../../assets/User-frontend/productivity1.jpg'




function Home1() {
  const navigate=useNavigate();
 

  const HandleNavigate=(path)=>{
    navigate(path)
  }

  const sectionRef = useRef(null);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://favqs.com/api/qotd");
      setQuote(response.data.quote.body);
      setAuthor(response.data.quote.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Stay positive and keep pushing forward!"); // Fallback quote
      setAuthor("Unknown");
    }
  };

  // Fetch quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);
 

  return (
    <div className='overflow-x-hidden'>

<div className='w-full h-screen bg-[#d2cec2] relative overflow-hidden'>
  {/* Navbar */}
  <Navbar />

  {/* Decorative side panel */}
  <div className='w-1/4 bg-[#4d493f] h-screen absolute right-0 top-0  origin-top-right'></div>

  {/* Main content */}
  <div className='container mx-auto px-6 relative z-10'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-screen'>
      {/* Text content */}
      <div className='text-left'>
        <h1 className='text-5xl font-bold text-[#4d493f] mb-8 animate-fadeIn ml-14'>
          Growing Up with Us
        </h1>
        <p className='text-lg text-[#4d493f] mb-12 max-w-[600px] animate-fadeIn delay-100 ml-14'>
          Your health journey starts today! Every small step you take brings you closer to a stronger, healthier, and happier version of yourself. Progress isn't about perfection—it’s about consistency, balance, and making mindful choices each day.
        </p>
        <button
          className='bg-[#4d493f] text-white py-3 px-8 rounded-full ml-14 text-lg font-semibold hover:bg-[#3a362d] transition-all duration-300 animate-fadeIn delay-200'
          onClick={scrollToSection}
        >
          Start Your Journey
        </button>
      </div>

      {/* Image */}
      <div className='relative  hidden lg:block animate-slideInRight mt-20'>
        <img
          src={home1}
          alt='Health Journey'
          className='w-[500px] h-[550px] object-cover rounded-lg shadow-2xl    transition-transform duration-500'
        />
        <div className='absolute -inset-4 border-2 border-[#4d493f] rounded-lg opacity-20'></div>
      </div>
    </div>
  </div>
</div>



      <div  ref={sectionRef}    className='w-full h-screen relative'>
        <div>
        <img src={time} alt="" className='w-[500px] h-[550px] absolute right-36 top-26' />
        </div>
        <p className='text-[#4d493f] tracking-widest pt-48 ml-26
'>Time Managment</p>
        <p className='font-sans text-4xl font-bold tracking-wide ml-26 mt-2

'
>Manage Your Time Efficiently</p>
<p className='w-2xl ml-26 mt-5 leading-[2] text-[]
'>Welcome to your time management dashbo
  ard! This page is designed to help you plan, prioritize, and stay on top of your daily tasks and long-term goals. Set remi
  nders, create to-do lists, and allocate time slots to specific activities with ease. Receive voice notifications when it’s ti
  me to start a task, ensuring you stay on schedule. Use visual progress charts to track how effectively you’re managing your time
   and identify areas for improvement. Take control of your day and make every minute count!</p>
   <button className='bg-[#4d493f] text-white font-bold w-[200px] p-2 ml-26 rounded-3xl mt-5 cursor-pointer'
   onClick={()=>{HandleNavigate('/time-managment')}}>Starts Right Now</button>
      </div>

     


<div className="relative w-full h-96 text-white flex justify-center items-center ">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${ban1})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      filter: "brightness(50%)", 
    }}
  ></div>
  
  <div className="relative w-full z-10 flex  flex-col justify-center h-96 items-center ">
    <h1 className="text-4xl font-bold tracking-wide mb-10">Today's Reminder</h1>
    <p className='text-center text-xl w-[70%] pb-10'>{quote}</p>
    <p> -{author}</p>
  </div>


</div>

<div className='w-full h-screen'>
<p className='text-[#4d493f] tracking-widest text-center mt-20
'>Healthy Lifestyle</p>
<p className='font-sans text-4xl font-bold tracking-wide text-center mt-2'>Guide Your Dream LifeStyle</p>
<div className='flex justify-center gap-6 mt-10'>
  <div className='w-2/6  h-[80vh] '>
    <img src={habit} alt="" className='w-[500px] h-[450px]' />
    <p className='w-[80%] text-[#4d493f] tracking-widest mt-2'>Stay on top of your goals by tracking your daily habits, helping you stay motivat
      ed and consistent as you make progress every day</p>
      {/* <button className='bg-[#4d493f] text-white p-2  w-[150px] font-bold mt-5 cursor-pointer'
      onClick={()=>{HandleNavigate('/habit-tracker')}}>Habit Tracker</button> */}
      <button className='bg-[#4d493f] text-white p-2  w-[150px] font-bold mt-5 cursor-pointer'
      onClick={()=>{HandleNavigate('/habit-tracker')}}>Habit Tracker  </button>
  </div>
  <div className='w-2/6  h-[80vh] '>
  <img src={fd} alt="" className='h-[450px]' />
  <p className='w-[80%] text-[#4d493f] tracking-widest mt-2 '>Stay on top of your goals by tracking your daily habits, helping you stay motivated and consistent as you make progress every day</p>
  <button className='bg-[#4d493f] text-white p-2  w-[150px] font-bold mt-5 cursor-pointer'
  onClick={()=>{HandleNavigate('/diet plans')}}>Diet Plans</button>

  </div>
</div>
</div>

<div className='w-full h-[80vh] bg-[#f4f9fb] mt-5 flex'>
  <div className='pt-20'>
<img src={nutrition} alt=""  className='w-[550px] h-[450px] ml-20 ' />
</div>
<div>
    <p className='text-[#4d493f] tracking-widest ml-28 mt-26'>Nutrition Guidence</p>
     <p className='font-sans text-5xl font-bold tracking-wide ml-28 w-[600px] 
'>Personalized Nutrition at Your Fingertips</p>
<p className='leading-[2] w-2xl ml-28 mt-4'>Now that you’ve started tracking your habits, it’s time to focus on your nutrit
  ion. With personalized plans tailored to your goals, you can make healthy eating si
  mple and effective. Whether you’re looking to manage your weight, build strength, or im
  prove overall wellness, you’ll have access to expert advice, meal ideas, and practical tips to support your j
  ourney. Fuel your body with the right foods and take another step toward a healthier you.</p>
  <button className='bg-[#4d493f] text-white font-bold w-[200px] p-2 ml-26 rounded-3xl mt-5 cursor-pointer'
  onClick={()=>{HandleNavigate('/nutrition')}}>Nutrition Insights</button>
</div>

</div>
<Footer/>

    </div>
  )
}

export default Home1




