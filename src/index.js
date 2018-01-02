import React from "react";
import ReactDOM from "react-dom";
import SnowStorm from 'react-snowstorm';
import { HashRouter } from "react-router-dom";
import './bootstrap.min.css';
import App from "./App";
import './index.css';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <SnowStorm snowColor="#60FCFF"
      followMouse="true"
      snowStick="true"
    />
    <HashRouter>
      <App />
    </HashRouter>
  </div>,
 document.getElementById("root")
);
registerServiceWorker();
