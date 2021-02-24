import styled from "styled-components";

const CartTotalCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  margin: 10px;
  border-radius: 8px;

  img {
    max-height: 150px;
    object-fit: contain;
  }

  p {
    font-size: 0.75rem;
  }

  h2 {
    font-size: 0.95rem;
  }

  h3 {
    font-size: 0.85rem;
  }

  button {
    font-size: 0.75rem;
  }
`;

export default CartTotalCard;
