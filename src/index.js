import React from 'react';
import ReactDOM from 'react-dom';
import CounterComponent from "./component/counter";
import App from './App'
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
        <App/>,
    rootEl
)

render()
