export const addProduct = (product) => {
    return {
      type: 'ADD_PRODUCT',
      payload: product
    };
};

export const deleteProduct = (product) =>{
  return {
    type : "REMOVE_PRODUCT",
    payload: product
  }
};

export const editProduct = (product) =>{
  return {
    type : "EDIT_PRODUCT_FORM",
    payload: product
  }
};

export const resetProductForm = () =>{
  return {
    type : "RESET_PRODUCT_FORM",
  }
};

export const updateProduct = (product) =>{
  return {
    type : "UPDATE_PRODUCT",
    payload: product
  }
};

  