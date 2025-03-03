import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
  reducer: combineReducers({
    cart: cartReducer,
  }),
});
