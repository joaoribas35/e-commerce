import DisplayCard from "./styles";
import DisplayProducts from "../../components/DisplayProducts";
import { useSelector } from "react-redux";

const ProductDisplay = () => {
  const products = useSelector((state) => state.products);

  return (
    <DisplayCard>
      {products.map((product, i) => (
        <DisplayProducts key={i} product={product} />
      ))}
    </DisplayCard>
  );
};

export default ProductDisplay;
