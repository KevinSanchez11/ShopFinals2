export const initialState = {
  total: 0,
  quantity: 0,
  products: []
};

export const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        products: payload.products
      };
    case "REMOVE":
      return {
        ...state,
        products: payload.products
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);

      return {
        ...state,
        total: payload.total
      };
    case "UPDATE_QUANTITY":
      console.log("UPDATE_QUANTITY", payload);

      return {
        ...state,
        quantity: payload.quantity
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
