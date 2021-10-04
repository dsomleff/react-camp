const CartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const items = cart.items.concat(action.item);
      const totalAmount = cart.totalAmount + action.item.price * action.item.amount;
      return { items, totalAmount };
    default:
      return cart;
  }
};

export default CartReducer;
