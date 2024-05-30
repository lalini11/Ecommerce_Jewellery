import React, { useState } from 'react';
import LightButton from '../../assets/images/lightmode.png';
import DarkButton from '../../assets/images/darkmode (2).png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState("light");
  return (
      <div className='relative'>
          <img 
           src={LightButton} 
           alt=''
           className= {`w-28 cursor-pointer ${ theme === "dark" ? "opacity-0" : "opacity-100"} `} 
           />
           <img 
           src={DarkButton} 
           alt=''
           className= {`w-24 cursor-pointer`} 
           />
      </div>
  )
}

export default DarkMode