import { combineReducers } from "redux";
import {partnerReducer} from "./partnerReducer";

const reducers = combineReducers({
    branchPartners: partnerReducer,
})

export default reducers;
