import axios from "axios";

export function getIdeaist(query) {
  // console.log("2. queryTVMazeAPI in util.js = " + query);
  return axios.get("./shows?q=" + query);
}