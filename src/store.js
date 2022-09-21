import { createStore } from "redux";
import rootReduser from "./redux/Reducers/index";

const store = createStore(rootReduser);
export default store;
