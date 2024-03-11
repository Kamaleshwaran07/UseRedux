import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Navbar from './Navbar';
import Cart from './Cart';
import Products from './Products';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    const productsData = useSelector((state) => state.proReducer.data)

    const totalQuantity = productsData.reduce((total, product) => total + (product.quantity || 0), 0);
    const totalPrice = productsData.reduce((total, product) => total + (product.finalValue.toFixed(0)) * (product.quantity || 0), 0);
    // console.log(product.price,);
    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path="/products" element={<Products totalPrice={totalPrice} totalQuantity={totalQuantity} />} />
                    <Route path="/cart" element={<Cart totalPrice={totalPrice} totalQuantity={totalQuantity} />} />

                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default Home;