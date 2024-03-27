import "./index.css";
import React from 'react';
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
