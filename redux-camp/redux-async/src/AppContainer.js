import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./features/ui/uiSlice";
import App from './App';
import Notification from "./features/ui/Notification";

let isInitial = true;

export function AppContainer() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        const sentCartData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }));

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

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sending cart data successfully'
            }));
        }

        if (isInitial) {
            isInitial = false;
            return;
        }

        sentCartData().catch(() => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));
        });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <App/>
        </Fragment>
    );
}
