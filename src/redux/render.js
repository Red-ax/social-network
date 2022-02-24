import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import {BrowserRouter} from "react-router-dom"
import '../index.css';

const rerenderEntireTree = (state, addPostMessage) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPostMessage={addPostMessage}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

export { rerenderEntireTree };