import axios from 'axios';

export function getIdeaists() {
  return axios.get('/users');
}

export function createIdeaist(newIdeaist) {
  console.log(newIdeaist)
  return axios.post('/users',newIdeaist);
}

export function getDevs() {
  return axios.get('/devs')
}

export function createDev(newDev) {
  console.log(newDev)
  return axios.post('/devs',newDev);
}


export function getApps() {
  return axios.get('/appIdeas');
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
