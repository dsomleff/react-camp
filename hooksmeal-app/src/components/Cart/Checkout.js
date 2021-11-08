import styles from './Cart.module.css';

const Checkout = props => {
  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>

      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>

      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>

      <div className={styles.control}>
        <label htmlFor="city ">City</label>
        <input type="text" id="city" />
      </div>

      <button type="button">Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default Checkout;
