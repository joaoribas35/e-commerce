import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch, getState) => {
    // console.log("state", getState);
    // console.log("mid", product);

    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(product));
  };
};

//forma simplificada de escrever a mesma coisa que a função acima
export const RemoveFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};
