import styled from "styled-components";
import { Router, Link } from "@reach/router";

import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import FinishPurchase from "./finishPurchase";

export const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Wishlist</Link>
        </LinksWrapper>
        <Router>
          <Products path="/" />
          <Cart path="/cart" />
          <CheckOut path="/checkout" />
          <FinishPurchase path="/finishpurchase" />
        </Router>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Arial";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #0004ff;

    :hover {
      color: #00d9ff;
      font-weight: bold;
    }
  }
`;
