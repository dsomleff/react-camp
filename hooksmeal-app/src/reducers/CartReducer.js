const CartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const totalAmount = cart.totalAmount + action.item.price * action.item.amount;
      // check if item already added in to a cart
      const index = cart.items.findIndex(item => item.id === action.item.id);
      const existedCartItem = cart.items[index];
      let items; // all items in cart

      if (existedCartItem) {
        const increasedItem = {
          ...existedCartItem,
          amount: existedCartItem.amount + action.item.amount
        };
        items = [...cart.items];
        items[index] = increasedItem;
      } else {
        items = cart.items.concat(action.item);
      }

      return { items, totalAmount };
    case 'REMOVE_ITEM':
      const cartIndex = cart.items.findIndex(item => item.id === action.id);
      const existedItem = cart.items[cartIndex];
      const updatedTotalAmount = cart.totalAmount - existedItem.price;
      let cartItems;

      if (existedItem.amount === 1) {
        cartItems = cart.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
        cartItems = [...cart.items];
        cartItems[cartIndex] = updatedItem;
      }

      return { items: cartItems, totalAmount: updatedTotalAmount };
    default:
      return cart;
  }
};

export default CartReducer;
