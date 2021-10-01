

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const items = state.items.concat(action.item);
      const totalAmount = state.totalAmount + action.item.price * action.item.amount;
      return { items, totalAmount };
    default:
      return state;
  }
};

export default CartReducer;
