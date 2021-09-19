import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  cartItems: cartFromStorage,
  ...sumItems(cartFromStorage),
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addProduct = (product) =>
    dispatch({ type: 'ADD_PRODUCT', payload: product });

  const increase = (product) =>
    dispatch({ type: 'INCREASE', payload: product });

  const decrease = (product) => {
    dispatch({ type: 'DECREASE', payload: product });
  };

  const remove = (product) => {
    dispatch({ type: 'REMOVE', payload: product });
  };

  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    remove,
    clear,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
