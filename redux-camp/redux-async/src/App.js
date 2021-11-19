import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import Cart from './features/cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
// import { sendCartData } from './features/cart/cartActions';

// let isInitial = true; // for Thunk Example

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    // const cart = useSelector(state => state.cart); // for Thunk Example
    // const dispatch = useDispatch(); // for Thunk Example
    //
    // useEffect(() => {
    //     if (isInitial) {
    //         isInitial = false;
    //         return;
    //     }
    //
    //     dispatch(sendCartData(cart));
    // },[cart, dispatch]); // for Thunk Example, check Network tab for prove

    return (
        <Layout>
            {showCart && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
