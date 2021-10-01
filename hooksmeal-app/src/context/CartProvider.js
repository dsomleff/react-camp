import CartContext from "./cart-context";

const CartProvider = props => {
  const addItem = item => { };
  const removeItem = id => { };

  const cartContextValues = {
    items: [],
    totalAmount: 0,
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
