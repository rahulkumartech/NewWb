const initialUserState = {
  cartItem: []
};

const addTocartdata = (state = initialUserState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        // cartItem: [...state.cartItem, action.payload]
        cartItem: addToCart(state.cartItem, action.payload)
      };

    default:
      return state;
  }
};

export default addTocartdata;

const addToCart = (state, action) => {
  console.log(state, "state", action);
  // const itemInCart = state.cart.find((item) => item.id === action.payload.id);
  // if (itemInCart) {
  //   itemInCart.quantity++;
  // } else {
  //   state.cart.push({ ...action.payload, quantity: 1 });
  // }
};
