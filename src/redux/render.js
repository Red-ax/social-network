import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import {BrowserRouter} from "react-router-dom"
import '../index.css';
import state from "./state";
import { addPostMessage, updatePost } from "./state";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPostMessage={addPostMessage} updatePost={updatePost}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

export { rerenderEntireTree };