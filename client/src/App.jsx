import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'


function App() {

  return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
    <BrowserRouter>
    <Header/>
    <Routes>
      {/*User visits /users → React Router renders Users.jsx.
      Users.jsx makes an API request to /api/users.
      Express backend handles logic, retrieves data from MongoDB, and responds.
      Users.jsx receives data and updates the UI. */}
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
