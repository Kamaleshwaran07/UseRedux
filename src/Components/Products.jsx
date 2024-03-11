import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, fetchProduct, increaseCart } from '../Features/Productslice';
import Card from './Card';
import Footer from './Footer';


const Products = ({ totalQuantity, totalPrice }) => {
    const productsData = useSelector((state) => state.proReducer.data)
    const status = useSelector((state) => state.proReducer.status);
    const error = useSelector((state) => state.proReducer.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())

    }, [dispatch])


    if (status === "loading") {

        return <div>
            <div class="loader flex justify-center items-center "></div>
            Loading.....
        </div>
        // <div>Loading.. so konjam irraa...
        {/* </div> */ }
    }
    if (status === "failed") {
        return <div>Failed so nalla paaru itha error: {error}</div>
    }
    return (
        <div>
            <div className='flex flex-wrap ms-auto my-4'>
                <div className='me-2 text-lg ms-auto p-2 text-white rounded-lg bg-slate-600 font-semibold'>Cart Quantity: {totalQuantity} Nos</div>
                <div className='me-2 text-lg p-2 text-white bg-slate-600 rounded-lg font-semibold'>Cart Price: ₹{totalPrice}</div>

            </div>

            <div className='gap-4 justify-items-center h-full grid grid-cols-3'>

                {productsData.map((item, index) => {
                    return (
                        <div key={index} >
                            <Card item={item} />

                        </div>

                    )
                })}
            </div>
            <Footer />
        </div>
    );
};

export default Products;