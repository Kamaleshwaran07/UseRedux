import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, fetchProduct, increaseCart } from '../Features/Productslice';
import { addToCart } from '../Features/Cartslice';
import Footer from './Footer';

const Card = ({ item }) => {
    const dispatch = useDispatch();

    const handleDecrease = (id, quantity) => {
        if (item.id === id && quantity > 0) {

            dispatch(decreaseCart({ id }))
        }
    }
    const handleIncrease = (id) => {

        if (item.id === id) {

            dispatch(increaseCart({ id }));
            dispatch(addToCart(item));

        }
        return item
    }

    return (


        <div className='card rounded-md relative border-2 border-solid border-slate-600 bg-slate-200'>
            <span className='absolute right-4'>{item.rating}<i class="fa-solid fa-star"></i></span>
            <img src={item.image} alt='cardImage' className='cardImage' />
            <div className='container bg-slate-200 mt-2 p-4'>

                <h1 className='text-2xl font-bold'>Model: {item.title}</h1>
                <h4 className='text-xl font-semibold'>Brand: {item.brand}</h4>
                {/* <p className='text-lg text-slate-700'>{item.description}</p> */}
                <div className='flex flex-row'>
                    <div className='me-2 text-md line-through text-slate-600'>M.R.P: ₹{item.price}</div>
                    <div className='me-2 text-lg text-red-500'>₹{item.finalValue}</div>
                    <div className='me-2 text-lg text-sky-500'>{item.discountPercentage}% OFF</div>
                </div>

            </div>
            <div className='flex flex-row mb-4 w-36 left-32 absolute bottom-0 items-center h-10 border-2 border-solid border-slate-500 rounded-md'>
                <button className="btn w-10 px-2 font-bold text-xl h-full me-auto bg-red-700 text-slate-100" onClick={() => handleDecrease(item.id, item.quantity || 0)}>-</button>
                <div className='text-md pt-1 font-bold text-slate-700 bg-yellow-500 w-full h-full text-center'>{item.quantity}</div>
                <button className="btn w-10  px-2 h-full ms-auto text-xl bg-teal-700 text-slate-100 font-bold " onClick={() => handleIncrease(item.id)}>+</button>

            </div>
            

        </div>

    );
};

export default Card;