import Card from '../../features/ui/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const ProductItem = (props) => {
    const {id, title, price, description} = props;
    const dispatch = useDispatch();

    const addToCardHandler = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price
        }));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCardHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
