import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import services from "../../services";
// import querystring from "query-string";
import Search from "./../search/Search";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  };

  // componentDidMount() {
  //   const { history, location } = this.props;
  //   // const queryFromLocation = location =>
  //   //   querystring.parse(location.search).query;
  //   // history.push({
  //   //   ...location
  //   // });
  // }

  onSearch = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
    this.setState({ isLoading: true });
    services
      .getMoviesSearch(query)
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, error, isLoading } = this.state;
    const { location } = this.props;
    return (
      <div>
        <Search onSearch={this.onSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        )}
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
      </div>
    );
  }
}
