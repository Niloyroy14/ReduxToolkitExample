import axios from "axios";
import {GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILED} from "../constants/todosConstants";



export const getALLTodos = () => async(dispacth) =>{

   dispacth({ type:GET_TODOS_REQUEST });

    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispacth({
            type:GET_TODOS_SUCCESS,
            payload: res.data
        });
    }catch(error){
        dispacth({
            type:GET_TODOS_FAILED,
            payload: error.message
        });
    }
   
};