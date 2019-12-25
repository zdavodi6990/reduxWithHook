import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {plus} from '../redux'
const HookCounter=()=>{
    const count=useSelector(state=>state.counter);
    const dispatch=useDispatch()
    return (
        <div>
        <h2>count:{count}</h2>
        <button onClick={()=>dispatch(plus())}>plusWithHook</button>
    </div>)
}
export default HookCounter