import { createContext } from 'react';
import { ProductInterface } from '../data/products';


interface ContextProps {
  products: ProductInterface[];
  cart: ProductInterface[];
  addToCart: (product: ProductInterface) => void;
  removeFromCart: (product: ProductInterface) => void;
  increaseQuantity: (product: ProductInterface) => void;
  decreaseQuantity: (product: ProductInterface) => void;
  clearCart: () => void;
}

export const StateContext = createContext({} as ContextProps);


