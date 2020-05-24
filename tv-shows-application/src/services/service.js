import axios from "axios"

//Function to get details of a particular show by sending id
export const getShowById= (id)=>{
    return axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=images`);
}

//Function to get details of relevant shows matching a keyword
export const getShowsByName=(name)=>{
    return axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
}

//Function to get details of all shows
export const getAllShows=()=>{
    return axios.get("http://api.tvmaze.com/shows");
}
