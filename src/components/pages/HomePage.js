import React, { Component } from "react";
import services from "../../services";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    services
      .getMovies()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading, error } = this.state;
    const { location } = this.props;
    return (
      <>
        <h2>Trending today</h2>
        {error && <p>Something wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        )}
        {movies.length && (
          <ul>
            {movies.map(elem => (
              <li key={elem.id}>
                <Link
                  to={{
                    pathname: `/movies/${elem.id}`,
                    state: { from: location }
                  }}
                >
                  {elem.title || elem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
