import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MoviesPage from "./components/pages/MoviesPage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import Navigation from "./components/navigation/Navigation";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.wrapper}>
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
