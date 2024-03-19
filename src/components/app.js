import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from "./UserList/UserList";
import ToDoList from "./ToDoList/todolist";
import Counter from "./Counter/CounterPage";
import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFounf/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <nav>
          <ul>
            <li><Link to='counter'>go to Counter component</Link></li>
            <li><Link to='users'>go to UserList component</Link></li>
            <li><Link to='todo'>go to ToDoList component</Link></li>
            <li><Link to='aloha'>go to AlohaDashboard component</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/aloha" element={<AlohaDashboard />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    );
  };
}

export default App;

//name.module.css
// import styles from './..'
/*

1.SSR (server-side rendering) - додатки, які рендеряться на сервері
2.CSR (clien-side rendering) - додатки, які рендеряться на клієнті

*/