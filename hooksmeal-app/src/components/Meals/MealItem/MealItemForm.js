import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = props => {
  const mealAmount = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const addMeal = e => {
    e.preventDefault();
    const amount = mealAmount.current.value;
    // const amountToNumber = +amount;

    if (amount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amount);
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
      {!amountIsValid && <p>Please choose a meal</p>}
    </form>
  );
};

export default MealItemForm;
