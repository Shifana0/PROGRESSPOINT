import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import About from '../Pages/Common/About'
import Contact from '../Pages/Common/Contact'
import SignUp from '../Pages/Common/SignUp'
import Login from '../Pages/Common/Login'

function Common() {
  return (
    <>
   
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>


        </Routes>
    </>
  )
}

export default Common