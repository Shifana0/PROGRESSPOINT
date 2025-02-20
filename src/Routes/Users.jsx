import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home1 from '../Pages/Users/Home1'
import Nutrition from '../Pages/Users/Nutrition'
import Time from '../Pages/Users/Time'
import HabitTracker from '../Pages/Users/HabitTracker'

import Dropdown from '../Pages/Users/Dropdown'
import DietPlan from '../Pages/Users/DietPlan'
import Bmi from '../Pages/Users/bmi'
import DietDetailed from '../Pages/Users/DietDetailed'

function Users() {
  return (
    <> 
    <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/nutrition' element={<Nutrition/>}/>
        <Route path='/time-managment' element={<Time/>}/>
        <Route path='/habit-tracker' element={<HabitTracker/>}/>
       <Route path='/bmi' element={<Bmi/>}/>
        <Route path='/dropdown' element={<Dropdown/>}/>
        <Route path ='/diet plans' element={<DietPlan/>}/>
        <Route path='/diet-detailed' element={<DietDetailed/>}/>



    </Routes>
    </>
  )
}

export default Users