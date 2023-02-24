import { ProductInterface } from './../data/products';


export const CART_ACTIONS_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_ITEM_QUANTITY: "INCREASE_ITEM_QUANTITY",
  DECREASE_ITEM_QUANTITY: "DECREASE_ITEM_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};
interface ProductInCartInterface extends ProductInterface {
  quantity: number;
}



export const  cartInitialState:ProductInCartInterface[] = JSON.parse(window.localStorage.getItem("cart") ||"[]");
// export let  cartInitialState =[];
// if(window.localStorage.getItem("cart")){
//   cartInitialState = JSON.parse(window.localStorage.getItem("cart") || "");
// }
console.log("cartInitialState", cartInitialState)



export const updateLocalStorage = (state:ProductInCartInterface[]) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
 };

 const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_ITEM]: (state:ProductInCartInterface[], payload:ProductInterface | null) => {
    console.log("UPDATE_STATE_BY_ACTION add item", state, payload);
    if(payload === null) return state;
    const product = state.find((product) => product.id === payload.id);
    if (product) {
      product.quantity++;
    } else {
      // state ={...state, productsInCart:[state.productsInCart, {...payload, quantity: 1}]}
      state = [...state, {...payload, quantity: 1}];
      //  state.push({ ...payload, quantity: 1 });
    }
    updateLocalStorage(state);
    return state;
  },
  [CART_ACTIONS_TYPES.REMOVE_ITEM]: (state:ProductInCartInterface[], payload:ProductInterface | null) => {
    if(payload === null) return state;
    state = state.filter((product) => product.id !== payload.id);
    updateLocalStorage(state);
    return state;
  },
  [CART_ACTIONS_TYPES.INCREASE_ITEM_QUANTITY]: (state:ProductInCartInterface[], payload:ProductInterface | null) => {
    if(payload === null) return state;
    const product = state.find((product) => product.id === payload.id);
    if (product) {
      product.quantity++;
    }
    updateLocalStorage(state);
    return state;
  },
  [CART_ACTIONS_TYPES.DECREASE_ITEM_QUANTITY]: (state:ProductInCartInterface[], payload:ProductInterface | null) => {
    if(payload === null) return state;
    const product = state.find((product) => product.id === payload.id);
    if (product) {
      product.quantity--;
    }
    updateLocalStorage(state);
    return state;
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: (state:ProductInCartInterface[]) => {
    state = [];
    updateLocalStorage(state);
    return state;
  },
 };

export const cartReducer = (state:ProductInCartInterface[], action:{type:string, payload:ProductInterface| null}) => {
  const { type, payload } = action;  
  const updateState = UPDATE_STATE_BY_ACTION[type];  
  if(updateState && payload){
    return   updateState(state, payload)
  }else if(updateState && !payload){    
    return updateState(state, null );
  }else{
    return state;
  }  
};