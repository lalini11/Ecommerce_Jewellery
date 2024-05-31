import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';


const FooterLinks = [
    {
       id: 1,
       name: 'Home',
       link: '/#'
    } , 
    {
       id: 2,
       name: 'Shop',
       link: '/#'
    } , 
    {
       id: 3,
       name: 'About',
       link: '/#'
    } , 
    {
       id: 4,
       name: 'Contact Us',
       link: '/#'
    } ,  
   ]

   const QuickLinks = [
    {
       id: 1,
       name: 'Rings',
       link: '/#'
    } , 
    {
       id: 2,
       name: 'Necklaces',
       link: '/#'
    } , 
    {
       id: 3,
       name: 'Earrings',
       link: '/#'
    } , 
    {
       id: 4,
       name: 'Bracelets',
       link: '/#'
    } ,  
   ]

const Footers = () => {
  return (
    <div>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
              {/*Company Details */} 
              <div className='py-8 px-4 text-left'> 
              <a href='#'
                className='text-primary font-semibold 
                tracking-widest text-2xl uppercase sm:text-3xl'>
                    Anup Jewellers
                </a>
                <p className='text-gray-600 lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos magnam iste 
                    odio reprehenderit,
                </p>
                <p className='text-gray-500 mt-4'>
                    Made with by The Focus Media
                </p>
                <a href="https://www.tanishq.co.in/"
                target='blank'
                className='inline-block bg-primary text-white
                py-2 px-4 mt-4 text-sm rounded-full'>
                    Visit site
                </a>
              </div>
              {/*Footer Links*/}
               <div className='col-span-2 grid grid-cols-2
               sm:grid-cols-3 md:pl-10'>
                    {/*First column links*/}
                    <div className='py-8 px-4 text-left'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className='text-gray-600 hover:text-black 
                                    duration-300'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*second column links*/}
                    <div className='py-8 px-4 text-left'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {QuickLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className='text-gray-600 hover:text-black 
                                    duration-300'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Company Address*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-semibold sm:text-left mb-3'>
                        Address</h1>

                        <div className='text-left'>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Raipur, Chhattisgarh</p>                                
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+91 1234567890</p>
                            </div>
                            {/*Social Links*/}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href='#'>
                                    <FaInstagram className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-3xl 
                                    hover:text-primary duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
               </div>               
            </div>
        </div>
    </div>
  )
}

export default Footers