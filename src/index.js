import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {likes: 12, message: 'Hi, i am Igor'},
  {likes: 4, message: 'I go walk!'},
  {likes: 31, message: 'Hello, world...'},
]

const dialogs = [
  {id: 1, name: 'Igor'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Maksim'},
  {id: 5, name: 'Sveta'},
];
const messages = [
  {id: 1, message: 'Hi, Igor!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Go for a walk'},
  {id: 4, message: 'Hello world...'},
  {id: 5, message: 'Blabla bla'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
