



import React from 'react'
import { useNavigate } from 'react-router-dom'

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



function Home1() {
  const navigate=useNavigate();

  const HandleNavigate=(path)=>{
    navigate(path)
  }

  return (
    <div>

      <div className='w-full h-screen bg-[#d2cec2] relative bottom-30  '>
       <Navbar/>
        <div className='w-1/4 bg-[#4d493f] h-screen absolute right-0 top-0'></div>
       
        <img src={home1} alt="" className='w-[500px] h-[550px] mt-16 absolute right-44 top-20 rounded-md' />
    <div >
        <p className='text-4xl font-bold ml-20 mt-30 relative top-38'>Growing Up with Us</p>
        <p className='w-[600px] ml-20 mt-40 relative top-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio dolorum repellendus doloremque delectus magni fugiat consectetur ratione rerum quod obcaecati cum, sint omnis enim natus labore inventore? Ex, quod.
          Lorem ipsum dolor sit amet consectetur adip itaque neque ex atque architecto numquam in molestiae repudiandae, doloremque modi qui veniam earum delectus reiciendis! Sequi veritatis odio tenetur error quis.
          Repellendus minima vitae delectus tempora dolor adipisci consequatur accusamus inventore impedit voluptate excepturi rerum amet fugiat, obcaecati quaerat nihil quae tempore? Velit consequuntur non quas cum aut nam ratione tenetur?
        </p>
        <button className='bg-[#4d493f] text-white p-2 rounded-3xl w-[260px] ml-20 mt-48 font-bold cursor-pointer relative bottom-28'>Starts Your Journey</button>
        </div>
      </div>

      {/* <div className='w-full h-72 flex flex-col justify-center items-center gap-6'>
        <p className='text-4xl font-bold '>Today's Reminder</p>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet rcitationem quasi culpa quaerat, sequi reprehenderit labore deserunt? Incidunt, dolores? Laborum magni consequuntur impedit. Ea.</p>
      </div> */}


      {/* <div className='w-full h-screen bg-[#eaeff0] relative'>
 <p className='text-4xl font-bold text-center pt-10 text-[#4d493f]'>Guide Your Dream LifeStyle</p> */}
{/* <img src={time1} alt="" className='w-[500px] h-[450px] absolute right-40 top-32' />
<p className='ml-32 mt-20 text-5xl w-[400px] font-bold'>Monitor Your Daily Progress</p>
<p className='ml-32 w-[400px] mt-5'>Stay on top of your goals by tracking your daily habits, helping you stay motivated and consistent as you make progress every day</p> */} 
{/* <div className='flex justify-center gap-6 mt-14'>
<div className='w-2/6  bg-white h-[80vh]'>
<img src={time} alt="" className='h-[60vh] w-full' />
</div>
<div className='w-2/6 bg-white h-[80vh] shadow-2xl'>
</div>

</div> */}

      {/* </div> */}


      <div className='w-full h-screen relative'>
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
    <p className='text-center text-xl w-[70%] pb-10'>Lorem iamet consectetur adipisicing elit. Necessitatibus, voluptatem in. Enim labore doloremque at iure minus sapiente laboriosam tempore nihil rerum sunt blanditiis, ab dolorum fugiat voluptatem consectetur sint.</p>
  </div>


</div>

<div className='w-full h-screen'>
<p className='text-[#4d493f] tracking-widest text-center mt-20
'>Healthy Lifestyle</p>
<p className='font-sans text-4xl font-bold tracking-wide text-center mt-2'>Guide Your Dream LifeStyle</p>
<div className='flex justify-center gap-6 mt-10'>
  <div className='w-2/6  h-[80vh] '>
    <img src={time} alt="" className='w-[500px] h-[450px]' />
    <p className='w-[80%] text-[#4d493f] tracking-widest mt-2'>Stay on top of your goals by tracking your daily habits, helping you stay motivat
      ed and consistent as you make progress every day</p>
      {/* <button className='bg-[#4d493f] text-white p-2  w-[150px] font-bold mt-5 cursor-pointer'
      onClick={()=>{HandleNavigate('/habit-tracker')}}>Habit Tracker</button> */}
      <button className='font-bold mt-4 text-[#4d493f] shadow-lg p-2 rounded-3xl w-[200px] hover:bg-[#4d493f] hover:text-white text-center'
      onClick={()=>{HandleNavigate('/habit-tracker')}}>Habit Tracker  <span className='pl-2 texxl'><FontAwesomeIcon icon={faArrowRight}/></span></button>
  </div>
  <div className='w-2/6  h-[80vh] '>
  <img src={fd} alt="" className='h-[450px]' />
  <p className='w-[80%] text-[#4d493f] tracking-widest mt-2'>Stay on top of your goals by tracking your daily habits, helping you stay motivated and consistent as you make progress every day</p>
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




