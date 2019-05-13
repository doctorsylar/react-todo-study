import React from 'react';
import ReactDOM from 'react-dom';
import './js/script';
import TodoApp from './app/app';

// JS CODE
// let tasks = [
//     { 'id' : 'task1', 'name' : 'task1', 'completed' : true },
//     { 'id' : 'task2', 'name' : 'task2', 'completed' : false }
// ];
// localStorage.setItem('tasks', JSON.stringify(tasks));
// tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Rendering RoomList component
ReactDOM.render(<TodoApp tasks={ tasks }/>, document.querySelector('#app'));