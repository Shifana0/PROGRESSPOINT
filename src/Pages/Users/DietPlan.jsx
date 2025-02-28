import React from 'react';
import Navbar from '../../Components/User-components/Navbar';
import meal3 from '../../assets/User-frontend/meal3.jpg';
import Footer from '../../Components/User-components/Footer';
import Diet from '../../Components/User-components/Diet';
import { useEffect } from 'react';

function DietPlan() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);
  return (
    <div>
      <Navbar iscolor={true} isText={true} />

      <div className="w-full h-[85vh] relative">
        <img
          src={meal3}
          alt="Healthy Meal"
          className="h-[85vh] w-full brightness-20 object-cover"
        />

     
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Personalized Diet Plan
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl px-4">
            Tailored to your goals, preferences, and lifestyle. Start your journey to a healthier you today!
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1 className='text-center font-bold text-3xl pt-10'>Your Weekly Planner</h1>
        </div>
        <div className='h-[90vh] flex grid grid-cols-4 ml-8 mt-6'>
         
        
        <Diet title="Day 1" kcal="6776 kcal" dayIndex="Day1" />
        <Diet title="Day 2" kcal="6776 kcal" dayIndex="Day2" />
        <Diet title="Day 3" kcal="6776 kcal" dayIndex="Day3" />
        <Diet title="Day 4" kcal="6776 kcal" dayIndex="Day4" />
        <Diet title="Day 5" kcal="6776 kcal" dayIndex="Day5" />
        <Diet title="Day 6" kcal="6776 kcal" dayIndex="Day6" />
        <Diet title="Day 7" kcal="6776 kcal" dayIndex="Day7" />

        </div>


      </div>

      <Footer/>
    </div>
  );
}

export default DietPlan;