// Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../Features/Cartslice';
import Footer from './Footer';


const Cart = ({ totalQuantity, totalPrice }) => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {


    dispatch(removeCart({ id }))

  }
  // const handleIncrease = (id) => {

  //   if (item.id === id) {

  //     dispatch(increaseCart({ id }));
  //     dispatch(addToCart(item));

  //   }
  //   return item
  // }
  return (
    <div>

      <div className='text-xl text-center mt-4'><i class="fa-solid fa-triangle-exclamation" id='error'></i>This page is in maintenance. It still in the work.... Stay tuned</div>
      {/* <h2>Cart</h2>
      <div className='w-full flex flex-row'>
        <div className='me-2'>{totalQuantity}</div>
        <div>{totalPrice}</div>

      </div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className='grid grid-cols-3'>
              <img src={item.image} alt='cartImage' className=' cartImage' />
              <div className='mt-4'>
                <div className='text-xl'>{item.title}</div>
                <div className='text-lg text-slate-600'>{item.description}</div>
              </div>
              <div>
                <div>Offer Price: ₹{item.finalValue}</div>
                <button className="btn w-6" onClick={() => handleRemove(item.id)}>Remove </button>
              </div>
            </div>



          </div>
        ))}
      </div>
 */}

    </div>

  );
};

export default Cart;
