import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hellocomponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';

// function HelloWorld ()
// {
//     return <p> ini adalah function component </p>
// }

// const Helloworld = () => {
//     return <p>ini adalag arrow function</p>
// }

// class Statefullcomponent extends React.Component
// {
//     render(){
//         return <p> ini adalah Statefullcomponent</p>
//     }
// }

class Greeting extends React.Component {
    render(){
    return <h1>hello, {this.props.name}</h1>
    }
}
ReactDOM.render( <Hellocomponent /> , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
