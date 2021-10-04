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
    case 'REMOVE_ITEM':
      const existedCartItemIndex = cart.items.findIndex(item => item.id === action.id);
      const existedItem = cart.items[existedCartItemIndex];
      const updatedTotalAmount = cart.totalAmount - existedItem.price;
      let updatedItems;

      if (existedItem.amount === 1) {
        updatedItems = cart.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
        updatedItems = { ...cart.items };
        updatedItems[existedCartItemIndex] = updatedItem;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    default:
      return cart;
  }
};

export default CartReducer;
