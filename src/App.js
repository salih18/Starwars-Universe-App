import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    

    <Router>
      <Header />
      <Home />
    </Router>
  </Provider>
);
export default App;
