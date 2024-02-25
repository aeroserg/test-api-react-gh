import { combineReducers, createStore } from "redux";
import selectReducer from "./selectRducer";
import dateReducer from "./dateReducer"
import categoryPicker from "./categoryPicker";

const rootReducer = combineReducers( {
    options: selectReducer,
    date: dateReducer,
    category: categoryPicker,
})


export const store = createStore(rootReducer)