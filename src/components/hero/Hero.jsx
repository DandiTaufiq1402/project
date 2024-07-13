import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div className='Hero container'>
         <div className='hero-text'>         { /* ganti aja terserah */ }
        <h1>We Ensure better education fo a better world</h1>
        <p className='pp'>
            Our cuting-edge better education is designed to empower studens
            with the knowledge, skills, and experiences needed to excel in
            the dynamict field of education
        </p>
        <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Join Now <img src={dark_arrow} alt="..." /></Link>
        </div>
    </div>
  )
}

export default Hero
