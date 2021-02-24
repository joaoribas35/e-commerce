import styled from "styled-components";

const CartProductsCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  margin: 15px 0;
  border-radius: 10px;

  img {
    max-height: 150px;

    align-items: center;
    object-fit: contain;
  }

  p {
    font-size: 0.85rem;
  }

  button {
    background-color: blue;
    font-size: 0.6rem;
  }

  div {
    margin: 0 5px;
    align-items: center;
  }

  h3 {
    font-size: 0.85rem;
  }

  hr {
    color: black;
    width: 100%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export default CartProductsCard;
