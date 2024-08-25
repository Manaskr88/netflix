import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import arrow from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase'




const Navbar = () => {

  const navRef = useRef();  // for nav scroll

  useEffect(()=>{

    window.addEventListener('scroll' , ()=>{

      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')

      }
    } )

  },[])


  return (
    <div ref={navRef} className='navbar'>

      <div className="left">
        <a href="/" >
          <img src={logo} />
          </a>
        <ul>
          <li>Menu</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>

        </ul>


      </div>


      <div className="right">

        <img src={search} className='icons' />
        <p>Children</p>
        <img src={bell} className='icons' />

        <div className="profilee">

          <img src={profile} className='profile' />
          <img src={arrow}  />
          <div className="drop">
            <p onClick={()=>{logout()}} >Sign Out of Netflix</p>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Navbar
