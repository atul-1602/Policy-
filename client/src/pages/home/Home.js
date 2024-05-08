import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Home.css'

export const Home = () => {
  return (
    <div className='containe'>

        <div className='navbar'>
        <Navbar/>
        </div>

        <div className='content'>

        </div>

        <div className='footer'>
        <Footer/>
        </div>

    </div>
  )
}
