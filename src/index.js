import React from 'react';
import ReactDOM from 'react-dom/client';
import AlohaDashboard from './components/AlohaDashboard/AlohaDashboard';
import ToDoList from './components/ToDoList/todolist';
import Scene from './components/Scene/scene';
import Counter from './components/Counter/Counter';
import CounterPage from './components/Counter/CounterPage';
import UserList from './components/UserList/UserList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserList/>
);


