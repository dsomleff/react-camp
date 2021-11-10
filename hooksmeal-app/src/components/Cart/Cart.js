import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  // Handlers Section
  const cartItemRemove = id => {
    cartContext.removeItem(id);
  };

  const cartItemAdd = item => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => setIsCheckout(true);

  const submitOrderHandler = async (userData) => {
    setIsSending(true);

    await fetch('https://hooks-meal-app-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items
      })
    });

    setIsSending(false);
    setIsSubmitted(true);
    cartContext.clearCart();
  };

  // HTML partials Section
  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map(item =>
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      )}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button
        className={styles['button--alt']}
        onClick={props.onHideCart}
      >
        Close
      </button>
      {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {
        isCheckout && (
          <Checkout
            onCancel={props.onHideCart}
            onSubmit={submitOrderHandler}
          />
        )
      }

      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const submittingModalMessage = <p>Sending order data...</p>;
  const successModalMessage = <p>Success!!!</p>;

  return (
    <Modal onClick={props.onHideCart}>
      {!isSending && !isSubmitted && cartModalContent}
      {isSending && submittingModalMessage}
      {!isSending && isSubmitted && successModalMessage}
    </Modal>
  );
};

export default Cart;
