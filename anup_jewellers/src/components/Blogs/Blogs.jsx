import React from 'react';
import Heading from '../Shared/Heading';
import BlogImg1 from '../../assets/images/blog1.jpg';
import BlogImg2 from '../../assets/images/blog2.jpg';
import BlogImg3 from '../../assets/images/blog3.jpg';



const Blogdata = [
    {
      title: "The History of Diamond Engagement Rings",
      description: "Explore the rich history behind the tradition of diamond engagement rings, from ancient Rome to modern times.",
      published: "2023-04-12",
      image:BlogImg1,
      aosDelay: '200',
      
    },
    {
      title: "Top 10 Jewelry Trends for 2024",
      description: "Stay ahead of the fashion curve with our guide to the top 10 jewelry trends for 2024, featuring bold designs and sustainable materials.",
      published: "2024-01-08",
      image:BlogImg2,
      aosDelay:'400',
    },
    {
      title: "How to Care for Your Gold Jewelry",
      description: "Learn the best practices for maintaining the luster and longevity of your gold jewelry with our expert care tips.",
      published: "2023-07-15",
      image:BlogImg3,
      aosDelay: '600',
    },
  ]
  
const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            {/*Header Section */}
            <Heading title='Recent News '
              subtitle='Explore Our Blogs' />
             {/*Blog section*/}  
             <div className="grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-3 gap-6 sm:gap-4 md:gap-7">
                {/* Blog Card */}
                {Blogdata.map((data)=> (
                    <div 
                    key={data.title}
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                     
                    className='bg-white'>
                        {/*Image section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} alt=''
                            className='w-full h-[220px] object-cover
                            rounded-2xl hover:scale-105 duration-500'/>
                        </div>
                        {/*Conntent section */}
                        <div className='text-left space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600'>{data.description}</p>
                        </div>
                    </div>
                 ))}

             </div> 
        </div>
    </div>
  )
}

export default Blogs