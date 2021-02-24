import DisplayProductsCard from "./styles";
import Button from "@material-ui/core/Button";

const DisplayProducts = ({ product }) => {
  return (
    <DisplayProductsCard>
      <img alt="pic" height="200" src="https://picsum.photos/200/300"></img>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button variant="contained" color="primary">
        add to cart
      </Button>
    </DisplayProductsCard>
  );
};

export default DisplayProducts;
