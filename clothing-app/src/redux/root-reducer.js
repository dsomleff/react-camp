import { combineReducers } from 'redux';
import CartReducer from './cart/cart.reducer';

export default combineReducers({
  cart: CartReducer
});
