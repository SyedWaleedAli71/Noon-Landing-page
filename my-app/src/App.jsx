import { useState } from 'react'
import './App.css'
import Navbar from './Componenets/Navbar/navbar.jsx';
import ManuNavbar from './Componenets/ManuNavbar/ManuNavbar.jsx';
import Items from './Componenets/Items/items.jsx';
import Slider from './Componenets/Slider/slider.jsx';
import MainSlider from './Componenets/mainSlider/mainSlider.jsx';
import ProductGrid from "./Componenets/ProductCard/Productgrid.jsx";
import Footer from './Componenets/Footer/footer.jsx';
import BottomBar from './Componenets/BottomBar/BottomBar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <ManuNavbar />
       <Slider />
       <MainSlider />
       <Items />
        <ProductGrid />
        <Footer />
        <BottomBar />
    </>

  )
}

export default App
