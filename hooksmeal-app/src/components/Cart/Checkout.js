import { useRef } from 'react';
import styles from './Checkout.module.css';

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postalValue = postalRef.current.value;
    const cityValue = cityRef.current.value;
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameRef}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          ref={streetRef}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          ref={postalRef}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          ref={cityRef}
        />
      </div>

      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
