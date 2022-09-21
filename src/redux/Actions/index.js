export const incNumber = () => {
  return {
    type: "INCREMENT"
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT"
  };
};
export const allUser = (val) => {
  return {
    type: "All_Usser",
    payload: val
  };
};

export const fillterProducet = (val) => {
  return {
    type: "FILLTER_PRODUCT",
    payload: val
  };
};

export const addToCart = (val) => {
  return {
    type: "ADD_TO_CART",
    payload: val
  };
};
