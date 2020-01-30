import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Test from './test';
import FormExample from './form';
import TestClass from './test-class-component';
import * as serviceWorker from './serviceWorker';
const numbers=[22,2,1];
const doubled = numbers.map(
    (num,index) => 
    <li key={index}>
        {num*3}
    </li>);
function curriculum(person) {
    return "Welcome to " + name + ' You are ' + person.job + 'But you have a hobby of ' + person.hobby;
}
const name = 'MyatHsu'
const person = {
    job: 'Teacher',
    hobby: 'Doctor'
}
function Sum(){
    return(
        <h1>Hello Sum</h1>
    )
}
function ComposingComponent() {
    return(
        <div>
            <FormExample/>
            <img src='logo192.png' alt="React Logo" />
            <h1>Hello ! Good to see you</h1>
            <h4>{curriculum(person)}</h4>  {/*Functioncall*/}
            <Test name="MyatHsu"/>{/*Extractingcomponent*/}
            <h1>{new Date().toLocaleTimeString()}</h1> 
            <TestClass name="HsuHsu"/> {/*Extractingcomponent*/}
            <Sum/> {/*composingcomponent*/}
            <ul>{doubled}</ul>
            
        </div>
    )
   

}
ReactDOM.render(<ComposingComponent/>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
