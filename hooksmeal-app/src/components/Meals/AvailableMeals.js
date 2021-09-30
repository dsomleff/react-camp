import styles from './AvailableMeals.module.css';
import meals from './dummy-meals';

const AvailableMeals = () => {
  const mealsList = meals.map(meal => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;
