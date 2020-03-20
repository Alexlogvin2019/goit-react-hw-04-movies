import React from "react";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
  <>
    <NavLink exact to="/">
      Home
    </NavLink>
    <span> ------ </span>
    <NavLink to="/movies">Movies</NavLink>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MovieDetailsPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
