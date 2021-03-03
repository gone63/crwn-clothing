import { CartActionTypes } from "./cart.types";
import {
  AddItemToCart,
  RemoveItemFromCart,
  DecreaseQuantityForItem,
} from "./cart.utlis";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DECREMENT_QUANTITY_FOR_ITEM:
      console.log("reducer decrease");
      return {
        ...state,
        cartItems: DecreaseQuantityForItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: RemoveItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
