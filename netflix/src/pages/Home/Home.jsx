import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import bg from '../../assets/12247190.jpg'

import title from '../../assets/title.png'
import tt from '../../assets/tt.png'

import play from '../../assets/Play_icon.png'
import info from '../../assets/info_icon.png'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'




const Home = () => {

  // const [category , setCategory] = useState('')


  return (
    <div className='Home'>

      <Navbar />


      <div className="hero">
        <img src={bg} className='bg' />

        <div className="caption">
          <img src={title} className='caption-img' />

          <p>The film follows a powerful industrialist's ruthless and hardened son and his troubled relationship with his father, which gets further jeopardized as he sets out on a path of vengeance and destruction after an attempt on his father's life.</p>

          <div className="hero-btn">
            <Link to="https://youtu.be/8FkLRUJj-o0?si=eXQY_bKmCwzlmTbP" >

            <button className='btn' ><img src={play} />Play</button>
            </Link>
            <button className=' dark-btn btn' ><img src={info} />More Info</button>

          </div>

          <Cards className="mk" />

        </div>

      </div>

      <div className="more-cards">
        <Cards title={"Upcoming Movies"} category={"upcoming"}/>
        <Cards title={"Top Rated Movie"} category={"top_rated"} />
        {/* <Cards title={"Top picks for You"} category={"popular"} /> */}
        <Cards title={"Blockbuster Movies"} category={"now_playing"} />

      </div>

      <Footer /> 

    </div>

  )
}

export default Home
