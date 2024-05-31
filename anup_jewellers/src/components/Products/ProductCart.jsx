import React from 'react'
import Button from '../Shared/Button'

const ProductCart = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-5 place-items-center'>
            {/*Crat section*/}
            {data.map((data) =>(
                <div className='group' key={data.id}>
                    <div className='relative space-y-3'>
                        <img src={data.img} alt=''
                        className='w-[180px] h-[180px] object-cover
                         rounded-md'/>
                         {/*Hover Button*/}
                         <div className='hidden group-hover:flex 
                         absolute top-1/2 -translate-y-1/2 left-1/2 
                         -translate-x-1/2 w-full text-center
                         group-hover:backdrop-blur-sm justify-center
                         item-center duration-200'>
                            <Button
                            text={'Add to cart'}
                            bgColor={'bg-primary'}
                            textColor={'text-white'}
                            />
                         </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>₹ {data.price}</h2>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default ProductCart