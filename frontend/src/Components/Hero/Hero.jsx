import React from 'react';
import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icon from '../Assets/arrow.png';
import backgroundVideo from '../Assets/hero.mp4'; // Import your background video file

const Hero = () => {
  return (
    <div className='hero'>
      {/* Background video element */}
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-left">
        <h2>Your go-to basics </h2>
        <div>
            {/* <div className="hero-hand-icon">
                
                { <img src={hand_icon} alt="" />}
            </div> */}
            <p>Luxury Quality, Honest Prices</p>
            
        </div>
        {/* <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div> */}
      </div>
      
    </div>
  );
}

export default Hero;
