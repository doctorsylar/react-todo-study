import React from 'react';
import ReactDOM from 'react-dom';
import './js/script';
import TodoApp from './app/app';

// JS CODE
// let tasks = localStorage.getItem('tasks');
let tasks = [
    'task1',
    'task2'
];

// Rendering RoomList component
ReactDOM.render(<TodoApp tasks={ tasks }/>, document.querySelector('#app'));