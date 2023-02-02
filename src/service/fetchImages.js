import axios from 'axios';

//const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31938482-76419dff0cedda02808dc9161';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (query, page) => {
  return await fetch(
    `${axios.defaults.baseURL}?key=${API_KEY}&q=${query}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
