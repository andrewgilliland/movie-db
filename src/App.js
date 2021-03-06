import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from "./movie-logo.svg";
import "./App.css";

import MoviesList from "./MoviesList";
import MoviesDetail from "./MovieDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MoviesDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
