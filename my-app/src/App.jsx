import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Componenets/Navbar/navbar.jsx';
import ManuNavbar from './Componenets/ManuNavbar/ManuNavbar.jsx';
import Slider from './Componenets/Slider/slider.jsx';
import MainSlider from './Componenets/mainSlider/mainSlider.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       {/* <ManuNavbar /> */}
       <Slider />
       <MainSlider />
    </>

  )
}

export default App
