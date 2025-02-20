import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Common from './Routes/Common'
import Users from './Routes/Users'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Common/> */}
    <Users/>
    </BrowserRouter>
    </>
  )
}

export default App