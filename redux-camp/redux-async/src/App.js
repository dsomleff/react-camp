import {useSelector} from "react-redux";
import Cart from './features/cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    return (
        <Layout>
            {showCart && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
