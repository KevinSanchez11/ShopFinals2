import styled from "styled-components";
import { Link } from "@reach/router";

import useShop from "./ShopContext";
import ProductCard from "./ProductCard";

export const Cart = () => {
  const { products, quantity } = useShop();

  return (
    <>
      <Title>Your wishlist</Title>
      <p>Items added: {quantity}</p>
      <LinksWrapper>
        <Link to="/checkout">--Check Out--</Link>
      </LinksWrapper>

      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Cart;

export const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  color: white;
`;

const LinksWrapper = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #0004ff;

    :hover {
      color: #00d9ff;
      font-weight: bold;
    }
  }
`;
