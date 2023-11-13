import { INCREMENT,DECREMENT,RESET } from "../constants/counterConstant";

const intialCounter = {
    count:0,
    numberOfStudents: 2,
};


const counterReducer = (state= intialCounter,action) =>{

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count +1 
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1 
            };

        case RESET:
            return {
                count: 0,
            };
            
        default:
            return state
    }
}


export default counterReducer;