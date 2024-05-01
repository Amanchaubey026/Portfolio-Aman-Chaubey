import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar"
import Projects from './components/Projects';
import Statistics from './components/Statistics';

const App = () => {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Statistics/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
