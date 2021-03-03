import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const decreaseQuantyForItem = (item) => ({
  type: CartActionTypes.DECREMENT_QUANTITY_FOR_ITEM,
  payload: item,
});

export const clearCartItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
