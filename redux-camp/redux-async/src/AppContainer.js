import { useEffect } from "react";
import { useSelector } from "react-redux";
import App from './App';

export function AppContainer() {
    const cart = useSelector(state => state.cart);
    
    useEffect(() => {
        fetch('https://redux-async-d74ed-default-rtdb.firebaseio.com/cart.json', { 
            method: 'PUT', 
            body: JSON.stringify(cart)
        });
    }, [cart]);
    
    return <App/>;
}