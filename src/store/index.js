import { createStore, combineReducers } from "redux";

// importa os reducers
import cartReducer from "../store/modules/cart/reducers";
import productsReducer from "../store/modules/products/reducers";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(reducers);

export default store;
