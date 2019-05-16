import axios from 'axios';

export function getIdeaist(query) {
  // console.log("2. queryTVMazeAPI in util.js = " + query);
  return axios.get('./shows?q=' + query);
}
import axios from 'axios';

//2.
export function queryTVMazeAPI(query) {
    // console.log("2. queryTVMazeAPI in util.js = " + query);
    return axios.get('./shows?q=' + query);
}

//2.
export function addFavoriteMovie(movie) {
    console.log('2. util.js passes in this movie id: ' + movie);
    return axios.post('./favorites', movie);
}

export function getFavorites(favorites) {
    // console.log('2. getFavorites in util.js hit. =>' + favorites)
    return axios
        .get('./favorites?q=' + favorites)
        .then(results => results.data);
}
