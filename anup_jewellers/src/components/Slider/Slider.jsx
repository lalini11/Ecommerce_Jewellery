import React from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import Image4 from '../../assets/images/image4.png';
import Image5 from '../../assets/images/image5.png';
import Button from '../Shared/Button';


const Slide =[
    {
      "id": 1,
      "image": Image1,
      "title": "Elegant Diamond Ring",
      "subtitle": "Exquisite design, perfect for every occasion."
    },
    {
      "id": 2,
      "image": Image2,
      "title": "Gold Necklace Collection",
      "subtitle": "Discover the latest trends in gold jewelry."
    },
    {
      "id": 3,
      "image": Image3,
      "title": "Bridal Jewellery Set",
      "subtitle": "Make your special day even more memorable."
    },
    {
      "id": 4,
      "image": Image4,
      "title": "Men's Platinum Band",
      "subtitle": "A symbol of strength and sophistication."
    },
    {
      "id": 5,
      "image": Image5,
      "title": "Ruby Earrings",
      "subtitle": "Add a touch of elegance with our ruby collection."
    }
  ]
  

const ShowSlider = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[50px]
        sm:min-h-[650px] bg-gradient-to-r Slide-bg-color flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {Slide.map((data) => (
                    <div key={data.id}>
                     <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col justify-center
                        gap-4 sm:pl-3 sm:pt-0 text-center
                        sm:text-left order-2 sm:order-1 relative z-10'>
                          <h1
                          data-aos='zoom-out'
                          data-aos-duration='500'
                          data-aos-once='true'
                           className='text-2xl sm:text-2xl lg:text-2xl font-bold hidden sm:block'>
                           {data.subtitle}</h1>
                          <h1 
                          data-aos='zoom-out'
                          data-aos-duration='500'
                          data-aos-once='true'
                          className='text-2xl sm:text-4xl lg:text-7xl font-bold'>
                            {data.title}</h1>
                          <div 
                          data-aos='fade-up'
                          data-aos-offset='0'
                          data-aos-duration='500'
                          data-aos-delay='300'
                          >
                           <Button
                           text="Shop Now"
                           bgColor='bg-primary'
                           textColor="text-white"
                           handler= {handleOrderPopup}
                           />
                        </div>
                        </div>
                        <div className='order-1 sm:order-2'>
                        <div 
                        data-aos='zoom-in'
                        data-aos-once='true'
                        className='relative z-10'
                        >
                            <img src={data.image} alt=''
                            className='w-[300px] sm:w-[450px]
                            h-[300px] sm:h-[450px]
                            sm:scale-105 lg:scale-110 object-contain
                            mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
                        </div>
                     </div>
                     </div>

                     
                    </div>
                ))}

            </Slider>
            </div>
            
        </div>
    </div>
  )
}

export default ShowSlider