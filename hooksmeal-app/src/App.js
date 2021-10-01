import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCart = () => {
    setCartIsActive(true);
  };

  const hideCart = () => {
    setCartIsActive(false);
  };

  return (
    <CartProvider className="App">
      {cartIsActive && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
