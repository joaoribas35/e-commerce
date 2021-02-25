import CartProductsCard from "./styles";
import Button from "@material-ui/core/Button";
// import { removeFromCart } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";
import { RemoveFromCartThunk } from "../../store/modules/cart/thunks";

const DisplayProducts = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CartProductsCard>
      <img alt="pic" src={product.image}></img>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <h3>${product.price}</h3>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(RemoveFromCartThunk(product.id))}
        >
          remove
        </Button>
      </div>
    </CartProductsCard>
  );
};

export default DisplayProducts;
