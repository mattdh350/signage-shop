import CartActionTypes from "./cart.types";

export const toggleShowCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
