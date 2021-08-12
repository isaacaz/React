import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e7baf572824f9093de9896eb41cd7952',
    lenguage: 'es-Es',
  },
});

export default movieDB;
