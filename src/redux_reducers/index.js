import { combineReducers } from "redux";

import input from "./inputReducer";
import math from "./mathReducer";

export default combineReducers({input,math})