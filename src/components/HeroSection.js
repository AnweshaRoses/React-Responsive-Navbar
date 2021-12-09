import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/vid/vid1.mp4'autoPlay loop muted></video>
            <h1>Adventure awaits</h1>
            <p>What are you waiting for?</p>
            <Button className="btns"buttonStyle="btn--outline"buttonSize="btn--large">Get Started</Button>
            <Button className="btns"buttonStyle="btn--primary"buttonSize="btn--large">Watch trailer<i className='far fa-play-circle'/></Button>
            
        </div>
    )
}

export default HeroSection


