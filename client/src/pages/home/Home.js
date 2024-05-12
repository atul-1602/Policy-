import React from 'react'
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import Doctors from '../../components/doctors/Doctors'
import './Home.css'

 const  Home = () => {
  return ( 
    <div>


        <Hero/>
        <Info/> 
        <Doctors/>
       

        

    </div>
  )
}
export default Home;