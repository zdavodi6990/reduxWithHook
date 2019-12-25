import React from 'react'
import {plus} from '../redux'
import {connect} from "react-redux";

function CounterComponent  (props) {
  return ( <div><p>Counter: {props.counter}</p><button onClick={props.plus}>+</button></div>)
}

const mapStateToProp=state=>{
    return{
      counter:state.counter
    }
}
const mapDispatchtoProp=dispatch=>{
    return{
        plus:()=>dispatch(plus())
    }
}
export default connect (mapStateToProp,mapDispatchtoProp) (CounterComponent)