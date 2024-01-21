const initialState = {
  products: [],
  formState: {
      editMode: false,
      formData: {
          productName: '',
          canExpire: false,
          productType: '',
          productPrice: '',
          isSpecial: false,
          expiryDate: '',
      }
  }
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
      case 'UPDATE_PRODUCT':
          const updatedProducts = state.products.map(product =>
              product.productID === action.payload.productID ? action.payload : product
          );
          return {
              ...state,
              products: updatedProducts
          };
      case 'EDIT_PRODUCT_FORM':
          console.log("here editing form in the reducer..");
          return {
              ...state,
              products: [...state.products],
              formState: {
                  editMode: true,
                  formData: {
                      productName: action.payload.productName,
                      canExpire: action.payload.canExpire,
                      productType: action.payload.productType,
                      productPrice: action.payload.productPrice.toString(),
                      isSpecial: action.payload.isSpecial,
                      expiryDate: action.payload.expiryDate,
                  }
              }
          };
      case 'RESET_PRODUCT_FORM':
          return {
              ...state,
              products: [...state.products],
              formState: {
                  editMode: false,
                  formData: {
                      productName: '',
                      canExpire: false,
                      productType: '',
                      productPrice: '',
                      isSpecial: false,
                      expiryDate: '',
                  }
              }
          };
      default:
          return state;
  }
};

export default productReducer;
