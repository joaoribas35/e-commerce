import ProductList from "../../ProductList";

import DisplayCard from "./styles";
import DisplayProducts from "../../components/DisplayProducts";

const ProductDisplay = () => {
  return (
    <DisplayCard>
      {ProductList.map((product, i) => (
        <DisplayProducts key={i} product={product} />
      ))}
    </DisplayCard>
  );
};

export default ProductDisplay;
