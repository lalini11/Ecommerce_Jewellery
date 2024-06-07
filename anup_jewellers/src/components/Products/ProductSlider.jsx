import React from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import Image4 from '../../assets/images/image4.png';
import Image5 from '../../assets/images/image5.png';
import Button from '../Shared/Button';
import Image from '../../assets/images/image3.png';



  const ProductSliderData= [
    {
        id: 1,
        img: Image,
        title: 'Bangle',
        price: '10000',
        aosdelay: '0',
    },
    {
        id: 2,
        img: Image,
        title: 'Bangle',
        price: '10000',
        aosdelay: '200',
    },
    {
        id: 3,
        img: Image,
        title: 'Bangle',
        price: '10000',
        aosdelay: '400',
    },
    {
        id: 4,
        img: Image,
        title: 'Bangle',
        price: '10000',
        aosdelay: '600',
    },
]

const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // medium devices breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // large devices breakpoint
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[50px]
        sm:min-h-[150px] flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}> 
            {/*Crat section*/}
            {ProductSliderData.map((data) =>(
                <div 
                data-aos= 'fade-up'
                data-aos-delay={data.aosDelay}
                className='group' key={data.id}>
                    <div className='relative'>
                        <img src={data.img} alt=''
                        className='w-[180px] h-[180px] 
                         rounded-md container'/>
                         {/*Hover Button*/}
                        
                    </div>
                    <div className='w-full text-center
                         group-hover:backdrop-blur-sm justify-center
                         item-center  duration-200'>
                            <Button
                            text={'Add to cart'}
                            bgColor={'bg-primary'}
                            textColor={'text-white'}
                            />
                         </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>₹ {data.price}</h2>
                    </div>
                </div>
            ))}
            </Slider>
            </div>
            
        </div>
    </div>
  )
}

export default ProductSlider