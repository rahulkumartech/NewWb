const fillterProduct = (state = "", action) => {
  let payload = action.payload;
  switch (action.type) {
    case "FILLTER_PRODUCT":
      return (state = payload);
    // return state.concat([payload]);
    default:
      return state;
  }
};
export default fillterProduct;
