import { useReducer } from "react";
import { ProductInterface } from "../data/products";
import { cartInitialState, cartReducer } from "../reducers/cart";

const useCartReducer = () => {
console.log("useCartReducer", cartInitialState);
  
  const [state, dispatch] = useReducer(cartReducer, cartInitialState );

  const addToCart = (product: ProductInterface) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (product: ProductInterface) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };
  const increaseQuantity = (product: ProductInterface) => {
    dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: product });
  };
  const decreaseQuantity = (product: ProductInterface) => {
    dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART', payload: null   });
  };

 
  return {state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}
};
export default useCartReducer;