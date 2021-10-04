import styles from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/cart-context';

const HeaderCartButton = props => {
  const [button, setButton] = useState(false);
  const { items } = useContext(CartContext);

  const countItems = items.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount;
  }, 0);

  const buttonStyles = `${styles.button} ${button ? styles.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) return;

    setButton(true);
    const timer = setTimeout(() => setButton(false), 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={buttonStyles} onClick={props.onClick}>
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
