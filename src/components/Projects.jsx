import Card from "./Card";
import "../styles/Project.css";
import img1 from '../assets/bb.png'
import img2 from '../assets/ff.png'
import img3 from '../assets/ll.png'
const Projects = () => {
  const basketBlend = 'https://syntax-craftsman-9012.vercel.app/';
  const fashionFusion = 'https://fashionfusion04.netlify.app/';
  const lensLoom = 'https://lensloom.netlify.app/';

  const bb = 'Basket Blend';
  const ff = 'Fashion Fusion';
  const ll = 'Lens Loom';
  const bbAbout = `Replicated BigBasket's features with HTML, CSS, JavaScript, Bootstrap, json-server, and json-server-auth, allowing browsing, cart management, and checkout.`
  const ffAbout = `FashionFusion, an e-commerce site, created with TypeScript, React, Chakra UI, and Redux Toolkit in just five days.`;
  const llAbout = `LensLoom: eyewear e-commerce project with Bootstrap, CSS, HTML. Responsive design, organized navigation, secure transactions, personalized shopping for eyewear enthusiasts.`;

  return (
    <div id="projects" className="project-all">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container grid-container">
        <Card about={bbAbout} name={bb} url={basketBlend} img={img1}/>
        <Card about = {ffAbout} name={ff} url={fashionFusion} img={img2}/>
        <Card about = {llAbout} name={ll} url={lensLoom} img={img3}/>
      </div>
    </div>
    
  );
};

export default Projects;
