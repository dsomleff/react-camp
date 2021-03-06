import { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals2.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>HooksMeal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Thanks Carrefour Foodscapes" />
      </div>
    </Fragment>
  );
};

export default Header;
