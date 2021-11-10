import { useRef, useState } from 'react';
import { isEmpty, isShort } from '../../helpers/validation';
import styles from './Checkout.module.css';

const Checkout = (props) => {
  const [validation, setValidation] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // grab inputs values
    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postalCodeValue = postalCodeRef.current.value;
    const cityValue = cityRef.current.value;

    // validate inputs values
    const nameIsValid = !isEmpty(nameValue);
    const streetIsValid = !isEmpty(streetValue);
    const postalCodeIsValid = isShort(postalCodeValue);
    const cityIsValid = !isEmpty(cityValue);

    setValidation({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid
    });

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: nameValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue
    });
  };

  // css
  const nameControlStyles = `${styles.control} ${validation.name ? '' : styles.invalid}`;
  const streetControlStyles = `${styles.control} ${validation.street ? '' : styles.invalid}`;
  const postalCodeControlStyles = `${styles.control} ${validation.postalCode ? '' : styles.invalid}`;
  const cityControlStyles = `${styles.control} ${validation.city ? '' : styles.invalid}`;

  // HTML partials Section
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={nameControlStyles}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameRef}
        />
        {!validation.name && <p>Please enter a valid name</p>}
      </div>

      <div className={streetControlStyles}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          ref={streetRef}
        />
        {!validation.street && <p>Please enter a valid street</p>}
      </div>

      <div className={postalCodeControlStyles}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          ref={postalCodeRef}
        />
        {!validation.postalCode && <p>Please enter a valid postal code</p>}
      </div>

      <div className={cityControlStyles}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          ref={cityRef}
        />
        {!validation.city && <p>Please enter a valid city</p>}
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
