import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";

const elem = document.getElementById('mail-crypter-app');
elem ? ReactDOM.render(<App />, elem) : false;