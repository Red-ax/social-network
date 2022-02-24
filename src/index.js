import React from 'react';
import { rerenderEntireTree } from "./redux/render";
import state from "./redux/state";
import { addPostMessage } from "./redux/state";

rerenderEntireTree(state, addPostMessage);