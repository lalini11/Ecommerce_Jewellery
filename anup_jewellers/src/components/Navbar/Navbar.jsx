import React, {useState} from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
const MenuLinks = [
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

const DropdownLinks = [
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
const Navbar = ({handleOrderPopup}) => {
const [isOpen, setIsOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
       <div className='py-4'>
        <div className='container flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <a href='#'
                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                    Anup Jewellers
                </a>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                        {MenuLinks.map((data, index) =>(
                            <li key={index}> 
                                <a href= {data.link}
                                className='inline-block px-4 
                                font-semibold text-gray-500
                                hover:text-black
                                dark:hover:text-white duration-200'>
                                {data.name}
                                </a>
                           </li>
                        ))}
                        <li className='relative cursor-pointer group'>
                            <a href='#'
                            className='flex items-center gap-[2px]
                            font-semibold text-gray-500 hover:text-black'
                            onClick={() => setDropdownOpen(!dropdownOpen)}>
                                Quick Links 
                                <span>
                                    <FaCaretDown
                                    className='group-hover:rotate-180 duration-300'/>
                                </span>
                            </a>
                            {/* Dropdown links */}
                            {dropdownOpen && (
                            <div className='absolute z-[9999] hidden
                            group-hover:block w-[200px] rounded-md
                             bg-white shadow-md p-2 '>
                                <ul className='space-y-2'>
                                    {DropdownLinks.map((data, index) =>(
                                        <li key={index}> 
                                            <a href= {data.link}
                                            className='
                                            text-gray-500
                                            hover:text-black
                                            dark:hover:text-white duration-200
                                            inline-block font-semibold rounded-md w-full
                                            p-2 hover:bg-blue-400/20'>
                                            {data.name}
                                            </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            )}
                        </li>
                    </ul>
                </div> 
                
            </div>
            <div className='flex justify-between items-center gap-4'>

                <div className='relative group hidden sm:block'>
                <input type='text' placeholder='Search...' className='search-bar' />
                <IoMdSearch  className='text-xl text-gray-600
                group-hover:text-primary
                dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                </div>
                <button className='relative p-3' onClick={handleOrderPopup}>
                 <FaShoppingCart className='text-xl text-gray-600
                 dark:text-gray-400'/>
                 <div className='w-4 h-4 bg-red-500 text-white
                 rounded-full absolute top-0 right-0 flex 
                 items-center justify-center text-xs'>4</div>
                </button>
                <button className="lg:hidden p-3" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes className="text-xl text-gray-600 dark:text-gray-400" /> : <FaBars className="text-xl text-gray-600 dark:text-gray-400" />}
            </button>
            </div>
        </div>

        {isOpen && (
          <div 
          className="lg:hidden bg-white w-1/2 sm:w-1/4 h-auto
           right-0 absolute ">
            <ul className="flex flex-col gap-2 mt-4 text-left w-[200px] px-2">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link}
                    className="inline-block px-4 font-semibold
                     text-gray-500 hover:text-black w-full
                     rounded-md p-2  hover:bg-blue-400/20
                      dark:hover:text-white duration-200">
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="relative cursor-pointer group">
                <div className="flex items-center gap-[2px] font-semibold
                 text-gray-500 hover:text-black px-4 mt-1"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Quick Links
                  <FaCaretDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {dropdownOpen && (
                  <div className="w-[200px] rounded-md bg-white shadow-md px-2 mt-2">
                    <ul className="space-y-2 mt-1">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white 
                            duration-200 inline-block font-semibold rounded-md 
                            w-full p-2 hover:bg-blue-400/20">
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}

        </div> 
    </div>
  )
}

export default Navbar