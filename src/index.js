import React from 'react';
import ReactDOM from 'react-dom';
import './js/script';
import App from './app/app';

// JS CODE
let tasks = localStorage.getItem('tasks');

// Rendering RoomList component
ReactDOM.render(<App/>, document.querySelector('#app'));