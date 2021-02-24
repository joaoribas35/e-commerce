import CartTotalCard from "./styles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <CartTotalCard>
      <div>
        <h2>Shopping Cart</h2>
        <p>{cart.length} products</p>
        <h3>Total ${cart.reduce((acc, product) => acc + product.price, 0)}</h3>
        <Button variant="contained" color="primary">
          Proceed to checkout
        </Button>
      </div>
    </CartTotalCard>
  );
};

export default CartTotal;
