import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  visible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default cartReducer;
