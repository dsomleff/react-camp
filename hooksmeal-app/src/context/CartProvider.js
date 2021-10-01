import { useReducer } from "react";
import CartReducer from "../reducers/CartReducer";
import CartContext from "./cart-context";

// for useReducer
const initialState = {
  items: [],
  totalAmount: 0
};

const CartProvider = props => {
  const [cartState, dispatchCart] = useReducer(CartReducer, initialState);

  const addItem = item => {
    dispatchCart({ type: 'ADD_ITEM', item });
  };

  const removeItem = id => {
    dispatchCart({ type: 'REMOVE_ITEM', id });
  };

  const cartContextValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem
  };

  return (
    <CartContext.Provider value={cartContextValues} >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
