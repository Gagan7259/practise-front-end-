import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Containers/Home/Home'
import Contact from '../Containers/Contact/Contact'
import About from '../Containers/About/About'
import SignUp from '../Containers/SignUp/SignUp'
import Footer from '../Components/Footer/Footer'
const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RouterConfig
