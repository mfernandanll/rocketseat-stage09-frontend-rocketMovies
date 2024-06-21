import axios from "axios";

export const api = axios.create({
  baseURL: 'https://movie-notes-api-ajo8.onrender.com'
});