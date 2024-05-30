import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import ShowSlider from './components/Slider/Slider';
import Category from './components/Category/Category';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ShowSlider/>
    <Category/>
    </>
  )
}

export default App
