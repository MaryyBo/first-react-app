import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  render() {
    return (
      <>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <button onClick={() => { window.location.assign('https://uk.legacy.reactjs.org/docs/react-component.html#componentdidupdate') }}>Assign</button>
        <button onClick={() => { window.location.reload() }}>Reload</button>
        <button onClick={() => { window.location.replace('https://developer.mozilla.org/ru/docs/Web/Events') }}>Replace</button>

        <p>Lorem ipsum lorem ipsum lorem</p>

        <button onClick={() => {
          window.navigator.clipboard.writeText('Lorem ipsum lorem ipsum lorem');
          toast.success('🦄 Copied to clipboard');
        }}>Click to copy text</button>
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