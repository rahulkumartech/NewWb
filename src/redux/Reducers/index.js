import { combineReducers } from "redux";
import addIncrement from "./dataReducer";
import allUser from "./allUserReducer";
import fillterProduct from "./fillterReducer";
import addTocartdata from "./addTocart";
const rootReduser = combineReducers({
  addIncrement,
  allUser,
  fillterProduct,
  addTocartdata
});

export default rootReduser;
