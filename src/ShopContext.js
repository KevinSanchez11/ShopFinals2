import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);

    updatePrice(updatedCart);
    updateQuantity(updatedCart);

    dispatch({
      type: "ADD",
      payload: {
        products: updatedCart
      }
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatePrice(updatedCart);
    updateQuantity(updatedCart);

    dispatch({
      type: "REMOVE",
      payload: {
        products: updatedCart
      }
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };

  const updateQuantity = (products) => {
    let quantity = 0;
    products.forEach((product) => quantity++);

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        quantity
      }
    });
  };

  const value = {
    total: state.total,
    quantity: state.quantity,
    products: state.products,
    addToCart,
    removeFromCart
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);

  return context;
};

export default useShop;
