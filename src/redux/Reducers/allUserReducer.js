const allUser = (state = [], action) => {
  let payload = action.payload;
  switch (action.type) {
    case "All_Usser":
      // return {  state, payload };
      return state.concat([payload]);
    default:
      return state;
  }
};

export default allUser;
