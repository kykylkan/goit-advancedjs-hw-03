import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50608541-859a2339eccb527f555031f69';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
