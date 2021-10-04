import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

const Cart = props => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemove = id => {

  };

  const cartItemAdd = item => {

  };

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

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button
          className={styles['button--alt']}
          onClick={props.onHideCart}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
