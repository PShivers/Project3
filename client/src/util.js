import axios from 'axios';

export function getIdeaists(query) {
  console.log("2. getIdeaists in util.js = " + query);
  return axios.get('./users');
}

export function getAppIdeas(apps) {
  // console.log('2. getFavorites in util.js hit. =>' + favorites)
  return axios
      .get('./appIdeas')
      .then(results => results.data);
}

//2.
// export function queryTVMazeAPI(query) {
//     // console.log("2. queryTVMazeAPI in util.js = " + query);
//     return axios.get('./shows?q=' + query);
// }

// //2.
// export function addFavoriteMovie(movie) {
//     console.log('2. util.js passes in this movie id: ' + movie);
//     return axios.post('./favorites', movie);
// }


