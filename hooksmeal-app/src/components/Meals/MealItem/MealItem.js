import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../context/cart-context';

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;
  const { addItem } = useContext(CartContext);

  const addToCart = amount => {
    addItem({
      ...props,
      amount
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={styles.description}>
          {props.description}
        </div>

        <div className={styles.price}>
          {price}
        </div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
