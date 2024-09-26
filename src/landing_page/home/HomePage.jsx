import React from 'react'
import Hero from './Hero'
import Login from './Login'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <Hero/>
    <hr />
    <Login/>
    <hr />
    <Stats/>
    <hr />
    <Pricing/>
    <hr />
    <Education/>
    <hr />
    <OpenAccount/>
    <hr />
    <Footer/>
    </>
  )
}

export default HomePage
