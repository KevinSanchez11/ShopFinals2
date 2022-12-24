import { shopData } from "./ShopData";
import ProductCard from "./ProductCard";
import styled from "styled-components";

export const Products = () => {
  return (
    <>
      <Title>Item List</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

export const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
`;

export const Title = styled.p`
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
`;
