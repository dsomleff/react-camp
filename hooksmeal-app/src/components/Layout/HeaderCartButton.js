import styles from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/cart-context';

const HeaderCartButton = props => {
  const { items } = useContext(CartContext);

  const countItems = items.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className={styles.badge}>
        {countItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
