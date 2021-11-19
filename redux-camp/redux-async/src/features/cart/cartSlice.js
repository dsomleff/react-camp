import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "../ui/uiSlice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existedItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existedItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existedItem.quantity++;
                existedItem.totalPrice = existedItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existedItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existedItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existedItem.quantity--;
                existedItem.price = existedItem.totalPrice - existedItem.price;
            }
        }
    }
});

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

export const cartActions = cartSlice.actions;
export default cartSlice;
