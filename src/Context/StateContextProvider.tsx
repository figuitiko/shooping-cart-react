import React from 'react'
import { StateContext } from './context';
import * as data from '../data/products';
import useCartReducer from '../hooks/useCartReducer';
const {default: products} = data;
const productsList = products.products;

interface Props{
  children: React.ReactNode
}

const StateContextProvider = ({children}:Props) => {
  const {state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCartReducer();
  return (
    <StateContext.Provider value={
      {
        products: productsList,
        cart: state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider;