import React, { Component } from "react";
import Loader from "react-loader-spinner";
import services from "../../services";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.movieId;
    services
      .getMoviesCast(id)
      .then(({ data }) => {
        this.setState({ cast: data.cast });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { cast, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        )}
        <ul className={styles.list}>
          {cast.map(cast => (
            <li
              className={styles.listItem}
              key={cast.cast_id}
              name="scroll-to-element"
            >
              <div className={styles.actorCard}>
                <p className={styles.character}>Character:</p>
                <p className={styles.characterName}>{cast.character}</p>
                <div className={styles.imageBox}>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : "https://avatarko.ru/img/kartinka/13/muzhchina_siluet_shlyapa_12433.jpg"
                    }
                    alt={cast.name}
                  />
                </div>

                <p className={styles.name}>{cast.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
