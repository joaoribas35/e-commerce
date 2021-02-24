import CartTotalCard from "./styles";
import Button from "@material-ui/core/Button";

const CartTotal = () => {
  return (
    <CartTotalCard>
      <div>
        <p>Shopping Cart</p>
        <p>3 products</p>
        <p>Total R$300</p>
        <Button variant="contained" color="primary">
          Proceed to checkout
        </Button>
      </div>
    </CartTotalCard>
  );
};

export default CartTotal;
