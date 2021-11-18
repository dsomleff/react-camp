import {createSlice} from "@reduxjs/toolkit";

createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existedItem = state.items.find(item => item.id === newItem.id);
            
            if (!existedItem) {
                state.items.push({
                    itemId: newItem.id,
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
        removeItem() {
            
        }
    }
});