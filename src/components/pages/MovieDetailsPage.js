import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import services from "../../services";
import styles from "./MDP.module.css";

export default class MovieDetailsPage extends Component {
  state = {
    details: {},
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.movieId;
    services
      .getMoviesDetails(id)
      .then(({ data }) => {
        this.setState({ details: data });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push("/");
  };

  render() {
    const { details, isLoading, error } = this.state;
    const { match, location } = this.props;

    return (
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleGoback}
        >
          Go back
        </button>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        )}
        {Object.keys(details).length && (
          <div>
            <div className={styles.movieCard}>
              <div className={styles.mainInfo}>
                <div className={styles.imageBox}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt="Poster"
                  />
                </div>
                <div>
                  <h3 className={styles.movieName}>{details.title}</h3>
                  <p>
                    User Score {details.vote_average * 10}
                    &#37;
                  </p>
                  <h4>Overview</h4>
                  <p>{details.overview}</p>
                  <h4>Genres</h4>
                  <p>
                    {details.genres.map(elem => (
                      <span key={elem.id}>{elem.name} </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <p>Additinal information</p>
            <ul className={styles.moreInfo}>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${details.id}/cast`,
                    state: { ...location }
                  }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${details.id}/reviews`,
                    state: { ...location }
                  }}
                >
                  Rewiews
                </Link>
              </li>
            </ul>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </div>
        )}
      </div>
    );
  }
}
