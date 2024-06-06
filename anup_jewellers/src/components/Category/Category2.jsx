import React from 'react';
import Img1 from '../../assets/images/image1.png';
import Img2 from '../../assets/images/image3.png';
import Img3 from '../../assets/images/image2.png';
import Button from '../Shared/Button';

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8'> 
            {/*third col*/}  
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400
                to-gray-200 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p
                            data-aos='fade-right'
                            data-aos-duration='500'
                            data-aos-once='true' 
                            className='text-2xl xl:text-4xl font-bold opacity-20 mb-2'>Jewellery</p>
                            <div
                            data-aos='fade-up-left'
                            data-aos-offset='0'
                            data-aos-duration='500'
                            data-aos-delay='300'
                            >
                                <Button
                                text="Explore Now"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <img src={Img2} alt=''
                    // className='w-[320px] absolute -right-4 lg:top-[40px]' />
                    className='w-[210px] sm:w-[250px] absolute top-1/3 sm:top-1/2 -translate-y-1/2 -right-0' />

                </div>
                {/*First col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-violet-500
                to-violet-200 text-black rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p 
                            data-aos='fade-right'
                            data-aos-duration='500'
                            data-aos-once='true'
                            className='text-2xl xl:text-4xl font-bold opacity-20 mb-2 text-white'>Necklace</p>
                            <div
                            data-aos='fade-up-left'
                            data-aos-offset='0'
                            data-aos-duration='500'
                            data-aos-delay='300'
                            >
                                <Button
                                text="Explore Now"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <img src={Img3} alt=''
                    // className='w-[320px] absolute -right-4 lg:top-[40px]' />
                    className='w-[320px] absolute top-0' />

                </div> 
                {/*second col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-green-500
                to-green-200 text-Black rounded-3xl relative h-[320px]
                flex items-end'>
                    <div className='item-center'>
                        <div className='mb-4'>
                            <p 
                            data-aos='fade-right'
                            data-aos-duration='500'
                            data-aos-once='true'
                            className='text-2xl xl:text-4xl font-bold opacity-20 mb-2 text-white'>Rings</p>
                            <div
                            data-aos='fade-up-left'
                            data-aos-offset='0'
                            data-aos-duration='500'
                            data-aos-delay='300'
                            >
                                <Button
                                text="Explore Now"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />

                            </div>
                            
                        </div>
                    </div>
                    <img src={Img1} alt=''
                    className='w-[200px] absolute top-3 sm:w-[250px]
                    h-[180px] sm:h-[180px] sm:scale-105 lg:scale-110 object-contain mx-auto' />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Category2;