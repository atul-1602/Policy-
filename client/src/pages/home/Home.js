import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import './Home.css'
import Info from '../../components/info/Info'

export const Home = () => {
  return (
    <div className='containe'>

        <div className='navbar'>
        <Navbar/>
        </div>

        <div className='content'>
        <Hero/>
        <Info/> 
        </div>

        <div className='footer'>
        <Footer/>
        </div>

    </div>
  )
}
