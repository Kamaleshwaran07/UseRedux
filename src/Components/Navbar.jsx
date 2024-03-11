import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { totalPrice, totalQuantity } from '../Features/Productslice';

const Navbar = ({ totalPrice, totalQuantity }) => {



    return (
        <div className=' w-full h-18 p-5 bg-sky-400' id='navbar'>
            <div className='flex flex-row ms-20 items-center  '>

                <div className='text-xl font-bold'>Namma Oor Kadai</div>
                <Link className='me-10  text-md font-semibold text-center ms-auto' to={'/'}> Home</Link>
                <Link className='me-10  text-md font-semibold text-center' to={'/products'}>Products</Link>
                <Link className='me-10  text-md font-semibold text-center' to={'/cart'}>Cart</Link>
                <Link className='ms-1 me-20 text-md rounded-lg text-blue-500 border-solid border-2 p-1 border-sky-500
                 font-semibold hover:text-white hover:bg-sky-500 text-center'
                    to={'/contact'} >Contact Us</Link>
            </div>


        </div>
    );
};

export default Navbar;