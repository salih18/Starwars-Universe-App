import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/elements/MovieDetails";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
