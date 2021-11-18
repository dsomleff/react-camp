import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "../features/ui/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
});

export default store;