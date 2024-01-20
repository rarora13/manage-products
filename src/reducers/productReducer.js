const initialState = {
    products: []
};
  
const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
            ...state,
            products: [...state.products, action.payload]
        };
        case 'REMOVE_PRODUCT':
          return {
              ...state,
              products: state.products.filter(product => product.productID !== action.payload.productID),
          };
          case 'EDIT_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            };
      default:
        return state;
    }
};
  
export default productReducer;