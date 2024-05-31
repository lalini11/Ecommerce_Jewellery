import React from 'react';
import Heading from '../Shared/Heading';
import ProductCart from './ProductCart';
import Image from '../../assets/images/bangle.png';

const ProductData= [
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

const Products = () => {
  return (
    <div>
        <div className="container">
            <div className="grid">
                {/*Header Section */}
                <Heading title='Our Products'
                subtitle='Explore Our Products' />
                {/*Body Section */}
                <ProductCart data={ProductData}/>
            </div>
        </div>
    </div>
  )
}

export default Products