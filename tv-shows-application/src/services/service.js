import axios from "axios"

export function getShowById(id){
    return axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=images`);
}

export function getShowsByName(name){
    return axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
}

export function getAllShows(){
    return axios.get("http://api.tvmaze.com/shows");
}
