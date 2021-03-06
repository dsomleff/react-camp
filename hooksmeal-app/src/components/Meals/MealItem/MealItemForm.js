import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef } from 'react';

const MealItemForm = props => {
  const mealAmount = useRef();

  const addMeal = e => {
    e.preventDefault();
    const amount = mealAmount.current.value;
    const amountToNumber = +amount;

    props.onAddToCart(amountToNumber);
  };

  return (
    <form className={styles.form} onSubmit={addMeal}>
      <Input
        ref={mealAmount}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
