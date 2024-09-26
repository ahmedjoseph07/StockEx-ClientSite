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
    <Hero/>
    <hr className='w-[85vw] mx-auto' />
    <Login/>
    <hr className='w-[85vw] mx-auto' />
    <Stats/>
    <hr className='w-[85vw] mx-auto' />
    <Pricing/>
    <hr className='w-[85vw] mx-auto' />
    <Education/>
    <OpenAccount/>
    <hr className='mx-auto' />
    <Footer/>
    </>
  )
}

export default HomePage
