import { createSlice } from '@reduxjs/toolkit'

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

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products= [...state.products, action.payload];
        },
        deleteProduct: (state, action) => {
            state.products= state.products.filter(product => product.productID !== action.payload.productID);
        },
        updateProduct:(state, action) => {
            state.products = state.products.map(product =>
                product.productID === action.payload.productID ? action.payload : product
            );
        },
        editProduct:(state, action) => {
            state.formState = {
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
        },
        resetProductForm: (state, initialState) => {
            state.formState = {
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
        }
    }
});

export const {addProduct, deleteProduct, updateProduct, editProduct, resetProductForm} = productSlice.actions

export default productSlice.reducer