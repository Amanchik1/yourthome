import {combineReducers, createStore} from "redux";
import {googleMapReducer} from "./googleMap_reducer";



let reducers = combineReducers({
    points: googleMapReducer,
    selectedPark: googleMapReducer
})

let store  = createStore(reducers)

window.store = store;

export default store;