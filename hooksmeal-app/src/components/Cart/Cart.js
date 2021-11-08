import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
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

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && <Checkout onCancel={props.onHideCart} />}

      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
