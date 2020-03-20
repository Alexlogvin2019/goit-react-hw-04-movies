// import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// const API_KEY = "c919f8b8c63efb348cc4277d55a583df";

// const params = {
//   api_key: API_KEY,
//   language: "ru_RU"
// };

// export default {
//   async getTrending() {
//     try {
//       const data = await axios.get("trending/all/day", { params });
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   },
//   async getMovieDetails(id) {
//     try {
//       const data = await axios.get(`/movie/${id}`, { params });
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   }
// };
import axios from "axios";

const API_KEY = "07252c2a6aa6a34a84f1028c4fcee284";
export default {
  async getMovies() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return data;
  },
  async getMoviesSearch(query) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return data;
  },
  async getMoviesDetails(movieId) {
    const data = await axios.get(
      `
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  },
  async getMoviesCast(movieId) {
    const data = await axios.get(
      `
        https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  },
  async getMoviesReviews(movieId) {
    const data = await axios.get(
      `
        https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data;
  }
};
