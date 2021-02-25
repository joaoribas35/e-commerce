import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// importa os reducers
import cartReducer from "../store/modules/cart/reducers";
import productsReducer from "../store/modules/products/reducers";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
