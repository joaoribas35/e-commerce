import styled from "styled-components";

const DisplayProductsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 350px;
  background-color: white;
  margin: 10px;
  border-radius: 10px;

  img {
    max-height: 150px;
    object-fit: contain;
  }

  p {
    font-size: 0.75rem;
  }

  h3 {
    font-size: 0.85rem;
  }
`;
export default DisplayProductsCard;
