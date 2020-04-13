import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseCartItemQuantity,
} from "./cart.utils";

const INITIAL_STATE = {
  visible: false,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN:
      return {
        ...state,
        visible: !state.visible,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        items: decreaseCartItemQuantity(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
