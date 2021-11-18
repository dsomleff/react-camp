import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;
export default cartSlice;