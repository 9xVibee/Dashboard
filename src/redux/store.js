import { createStore } from "redux";
import LightDarkModeReducer from "./light-dark/lightDarkReducer";

const store = createStore(LightDarkModeReducer);

export default store;
