import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { basketReducer } from "./basketReducer";
import { clientReducer } from "./clientReduser";
import { categoryReducer } from "./caregoryReducer";

export const rootReducer = combineReducers({
    menu : productReducer,
    basket: basketReducer,
    client: clientReducer,
    category: categoryReducer,
});