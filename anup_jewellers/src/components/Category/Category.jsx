import React from 'react';
import Img1 from '../../assets/images/image5.png';
import Img2 from '../../assets/images/image6.png';
import Img3 from '../../assets/images/braclets.png';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8'> 
                {/*First col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-yellow-400
                to-yellow-200 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p className='text-2xl xl:text-4xl font-bold opacity-20 mb-2 text-black'>Braclets</p>
                            <Button
                            text="Explore Now"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Img3} alt=''
                    // className='w-[320px] absolute -right-4 lg:top-[40px]' />
                    className='w-[320px] absolute top-0' />

                </div> 
                {/*second col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90
                to-black/70 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p className='text-2xl xl:text-4xl font-bold opacity-20 mb-2'>Earrings</p>
                            <Button
                            text="Explore Now"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Img1} alt=''
                    className='w-[220px] absolute top-1 sm:w-[250px]
                    h-[200px] sm:h-[200px] sm:scale-105 lg:scale-110 object-contain mx-auto' />
                </div>
                {/*third col*/}  
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-red-400
                to-red-200 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p className='text-2xl xl:text-4xl font-bold opacity-20 mb-2 text-black'>Bangles</p>
                            <Button
                            text="Explore Now"
                            bgColor={"bg-white"}
                            textColor={"text-primary"}
                            />
                        </div>
                    </div>
                    <img src={Img2} alt=''
                    // className='w-[320px] absolute -right-4 lg:top-[40px]' />
                    className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />

                </div> 
            </div>
        </div>
    </div>
  )
}

export default Category