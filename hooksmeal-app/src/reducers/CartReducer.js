const CartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const totalAmount = cart.totalAmount + action.item.price * action.item.amount;
      // check if item already added in to a cart
      const addedCartItemIndex = cart.items.findIndex(item => item.id === action.item.id);
      const addedCartItem = cart.items[addedCartItemIndex]; // grab existed item
      let addedItems; // all items in cart

      if (addedCartItem) {
        const addedItem = {
          ...addedCartItem,
          amount: addedCartItem.amount + action.item.amount
        };
        addedItems = [...cart.items];
        addedItems[addedCartItemIndex] = addedItem;
      } else {
        addedItems = cart.items.concat(action.item);
      }

      return { items: addedItems, totalAmount };
    default:
      return cart;
  }
};

export default CartReducer;
