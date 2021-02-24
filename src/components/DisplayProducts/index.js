import DisplayProductsCard from "./styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

const DisplayProducts = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <DisplayProductsCard>
      <img alt="pic" width="200" src={product.image}></img>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(addToCart(product))}
      >
        add to cart
      </Button>
    </DisplayProductsCard>
  );
};

export default DisplayProducts;
