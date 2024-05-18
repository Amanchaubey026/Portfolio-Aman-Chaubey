import { useEffect } from 'react';
import '../styles/heroSection.css';
import Typed from 'typed.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroSection = () => {
  function handleDownload(){
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1N97C5vtPK_TmyLSWWOSD11osNvSiB-BQ';
    link.download = 'AmanChaubey_8881503310.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  useEffect(() => {
    let typed = null;
    if (typed === null) {
      typed = new Typed('.typed-text', {
        strings: ["A skilled MERN developer with 1500+ hours of coding experience. ", "Let's build something incredible! "],
        typeSpeed: 100
      });
    }

    return () => {
      if (typed !== null) {
        typed.destroy();
        typed = null;
      }
    };
  }, []);

  return (
    <div id='home' className='hero'>
      <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2005x2048-fal2biag.png" alt="" />
      <h1>Hello, my name is <span>Aman Chaubey</span></h1>
      <p>I am a MERN developer,<span className="typed-text"></span></p>
      <div className="hero-action">
        <div  className="hero-connect">
        <AnchorLink href="#contact" >Connect with me.</AnchorLink>
        </div>
        <div onClick={handleDownload} className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
