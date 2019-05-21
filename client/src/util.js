import axios from 'axios';

//==============================
//====  Ideaists  ==============
//==============================

export function getIdeaists() {
  return axios.get('/users');
}

export function getIdeaist(id) {
  // console.log("3. axios req received this " + id)
  return axios.get(`/users/${id}`);
}

export function createIdeaist(newIdeaist) {
  console.log(newIdeaist);
  return axios.post('/users', newIdeaist);
}

export function updateIdeaist(ideaist) {
  // console.log(ideaist)
  return axios.put(`/users/${ideaist._id}`, ideaist);
}

export function deleteIdeaist(id) {
  return axios.delete(`/users/${id}`);
}

//==============================
//====  Devs  ==================
//==============================

export function getDevs() {
  return axios.get('/devs');
}

//return single Developer
export function getDev(id) {
  console.log('3.getdev axios req received this ' + id);
  return axios.get(`/devs/${id}`);
}

export function createDev(newDev) {
  console.log(newDev);
  return axios.post('/devs', newDev);
}

export function updateDev(dev) {
  // console.log(dev)
  return axios.put(`/devs/${dev._id}`, dev);
}

//delete single Developer
export function deleteDev(id) {
  return axios.delete(`/devs/${id}`);
}

//==============================
//====  App Ideas ==============
//==============================

export function getAppIdeas() {
  return axios.get('/appIdeas');
}

export function createAppIdea(newAppIdea) {
  console.log(newAppIdea);
  return axios.post('/appIdeas', newAppIdea);
}

export function getAppIdea(id) {
  console.log('2. ' + id);
  return axios.get(`/appIdeas/${id}`);
}
