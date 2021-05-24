import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import sample from '../images/sample.mp4';


const Header = () => {
  return (
    <div id="home">
      <video className='header-wraper' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
      </video>
      <div className="main-info">
        <canvas></canvas>
       
        <Typed
          className="typed-text"
          
          strings={["Hello"]}
          typeSpeed={55}
          
          
          
          stop
        />
        <Typed
          className="typed-text"
          
          strings={["Front-end Devloper", "UI/UX Expert", "Dog Dad", "Muscian"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
