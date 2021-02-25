const listLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = listLocalStorage, action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    case "@cart/REMOVE":
      const { list } = action;
      // const newList = state.filter((product) => product.id !== id);
      return list;

    default:
      return state;
  }
};

export default cartReducer;
