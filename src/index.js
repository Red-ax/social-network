import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css'
import store from "./redux/state"
// import {addPostMessage, updatePost, subscribe} from "./redux/state";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()}
           addPostMessage={store.addPostMessage.bind(store)}
           updatePost={store.updatePost.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);