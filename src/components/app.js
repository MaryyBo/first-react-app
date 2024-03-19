import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import WindowResizer from "./WindowResizer/windowResizer";


class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => { window.close() }}>close page</button>
        <button onClick={() => { window.open('https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/') }}>Відкрити методи классової компоненти</button>
      </>
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