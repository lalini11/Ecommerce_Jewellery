import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import ShowSlider from './components/Slider/Slider';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banners from './components/Banners/Banners';
import Jewellery from './assets/images/image4.png';
import Jewellery2 from './assets/images/image2.png';

import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footers from './components/Footers/Footers';

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '1 jun to 25 july',
  image: Jewellery,
  title2:'24 caret',
  title3: 'Festival Sale',
  title4: 'A gift from a jewelry destination. Our newest jewelry showcases our creativity and unparalleled design at its best.',
  bgColor: '#000080',
}
const BannerData2 = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '1 jun to 25 july',
  image: Jewellery2,
  title2:'24 caret',
  title3: 'Festival Sale',
  title4: 'A gift from a jewelry destination. Our newest jewelry showcases our creativity and unparalleled design at its best.',
  bgColor: '#D35400',
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <ShowSlider/>
    <Category/>
    <Category2/>
    <Services/>
    <Banners data = {BannerData}/>
    <Products/>
    <Banners data={BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footers/>
    </>
  )
}

export default App
