import {PLUS} from './actionType';
const intialstat={
    counter:100

};
const counterReducer =(state=intialstat,action)=>{
    switch (action.type) {
        case PLUS:return{
            ...state,
            counter:state.counter+1
        }
        default:return state

    }

}
export default counterReducer