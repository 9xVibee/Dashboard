/* eslint-disable no-unused-vars */

import { DarkMode, LightMode } from "./lightDarkTypes";

const initialState = {
  lightDarkMode: "light",
};

const LightDarkModeReducer = (state = initialState, action) => {
  console.log("REDUCER ; ", state);
  switch (action.type) {
    case LightMode: {
      return { lightDarkMode: "light" };
    }

    case DarkMode: {
      return { lightDarkMode: "dark" };
    }

    default:
      return state;
  }
};

export default LightDarkModeReducer;
