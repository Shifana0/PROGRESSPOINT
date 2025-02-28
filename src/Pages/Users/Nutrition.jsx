import React from 'react';
import Navbar from '../../Components/User-components/Navbar';
import nutrition3 from '../../assets/User-frontend/nutrition3.jpg';
import Footer from '../../Components/User-components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Nutritionist from '../../Components/User-components/Nutritionist';

function Nutrition() {
  return (
    <div>
      <Navbar iscolor={true} isText={true} />

      <div className='w-full h-[90vh] relative'>
        <img src={nutrition3} alt="" className='w-full h-[90vh] brightness-30 object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-white text-4xl font-bold text-center'>
            Fuel Your Body, Transform Your Health!
          </h1>
          <p className='text-white text-xl mt-4'>Connect with Expert Nutritionists & Get Personalized Guidance for a Healthier You!</p>
          <button className='bg-amber-900 text-white p-2 mt-5 w-28 rounded-xl cursor-pointer'>Get Started</button>
        </div>
      </div>

      <div className='h-screen w-full bg-[#f9f7f2] '>
      <div className="relative w-[44%] ml-[26%] pt-15">
  <FontAwesomeIcon
    icon={faSearch}
    className="absolute left-3 top-[82px] transform -translate-y-1/2 text-gray-400"
  />
  <input
    type="search"
    className="w-full border p-2 pl-10 rounded-2xl focus:outline-none"
    placeholder="Search Experts here..."
  />
</div>
<Nutritionist/>

      </div>
     
    </div>
  );
}

export default Nutrition;
