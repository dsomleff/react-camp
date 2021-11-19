import { uiActions } from "../ui/uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-async-d74ed-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return await response.json();
        }

        try {
            const cartData = await fetchData();

            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Fetching cart data failed!'
            }));
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));

        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-async-d74ed-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart is fail!');
            }
        };

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sending cart data successfully'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));
        }
    };
}
