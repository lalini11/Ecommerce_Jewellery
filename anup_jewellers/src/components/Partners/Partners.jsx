import React from 'react';
import Brand1 from '../../assets/images/brand1.png';
import Brand2 from '../../assets/images/brand2.png';
import Brand3 from '../../assets/images/brand3.png';
import Brand4 from '../../assets/images/brand4.png';
import Brand5 from '../../assets/images/brand5.png';


const Partners = () => {
  return (
    <div 
    data-aos='zoom-out'
    className='py-8 mt-24 md:block bg-gray-200'>
        <div className="container">
            <div className="grid grid-cols-5 gap-3 place-items-center">
                <img src={Brand1} alt='' className='w-[80px]'/>
                <img src={Brand2} alt='' className='w-[80px]'/>
                <img src={Brand3} alt='' className='w-[80px]'/>
                <img src={Brand4} alt='' className='w-[80px]'/>
                <img src={Brand5} alt='' className='w-[80px]'/>

            </div>
        </div>
    </div>
  )
}

export default Partners