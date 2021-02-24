import CartProductsCard from "./styles";
import Button from "@material-ui/core/Button";

const DisplayProducts = ({ product }) => {
  return (
    <CartProductsCard>
      <img alt="pic" height="200" src="https://picsum.photos/200/300"></img>
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
      <div>
        <p>{product.price}</p>
        <Button variant="contained" color="primary">
          remove from cart
        </Button>
      </div>
    </CartProductsCard>
  );
};

export default DisplayProducts;
