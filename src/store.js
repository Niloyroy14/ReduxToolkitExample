import thunk from "redux-thunk";
import counterReducer from "./Services/reducers/counterReducers";
import todosReducer from "./Services/reducers/todosReducers";
import  {createStore,combineReducers, applyMiddleware}  from "redux";




//combine all reducer
// const allReducer = combineReducers({
//     counterRedu:counterReducer,
//     todosRedu:todosReducer
// })

//create store
const store =  createStore(todosReducer,applyMiddleware(thunk));


export default store;