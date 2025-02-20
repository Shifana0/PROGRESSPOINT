import React from 'react'
import { Link } from 'react-router-dom'

function Diet(props) {
  return (
    <div className='w-[340px] h-50 shadow-2xl rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105'>
        <p className='font-bold text-2xl mb-1.5'> {props.title} </p>
        <p className='text-sm text-gray-500'>{props.kcal} </p>
        <Link to='/diet-detailed'>
  <button className='bg-[#4d493f] text-white rounded-lg w-[100px] mt-3 p-2 cursor-pointer font-medium transition-all duration-300 hover:bg-[#3a372f] active:scale-95'>View</button>
</Link>
    </div>
  )
}

export default Diet