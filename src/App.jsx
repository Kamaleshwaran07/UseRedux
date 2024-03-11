import React from 'react';
import { Provider } from 'react-redux';
import { Productstore } from './Features/ProductStore';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { useSelector } from 'react-redux';

const App = () => {

  // console.log(product.price,);

  return (
    <div>

      <Provider store={Productstore}>
        <Home />
        {/* <Navbar totalPrice={totalPrice} totalQuantity={totalQuantity} /> */}
        

      </Provider>
    </div>
  );
};

export default App;