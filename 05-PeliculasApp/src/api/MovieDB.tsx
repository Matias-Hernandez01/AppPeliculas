import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers:{
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODJkYjQwMTdmMmE4Yzk5Nzc5ZDIxZGY5Y2EyMzkxZiIsInN1YiI6IjY0ZTUxNTM1ZTg5NGE2MDEwMTFmODNmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1cIDYumS7M8H2GwAGmGcGOL_L5O4yphcoF3OUIpUzM'},
  params:{
    // apiKey: '482db4017f2a8c99779d21df9ca2391f',
    lenguage: "es-ES"
  }
})

export default movieDB;