import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>

      <div className="icon">
        <img src={youtube} />
        <img src={twitter} />
        <img src={instagram} />
        <img src={facebook} />

      </div>

      <ul>
        <li>Audio  Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investors Relation</li>
        <li>Legal Notices</li>
        <li>Privacy</li>
        <li>Jobs</li>
        <li>Contact us</li>
        
      </ul>

      <p className='copyright'>
        Copyright By Manas-Netflix, Inc
      </p>

    </div>
  )
}

export default Footer
