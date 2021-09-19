const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const sumItems = (cartItems) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    ),
    total: cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ),
  };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'INCREASE':
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'DECREASE':
      const decreaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = state.cartItems[decreaseIndex];
      if (product.quantity > 1) {
        product.quantity--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'REMOVE':
      const updatedList = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...updatedList],
        ...sumItems(updatedList),
      };

    case 'CLEAR':
      localStorage.removeItem('cart');
      return {
        itemCount: 0,
        cartItems: [],
        total: 0,
      };

    default:
      return state;
  }
};
