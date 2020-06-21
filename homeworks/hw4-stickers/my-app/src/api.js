import axios from 'axios';

export default axios.create({
  baseURL: 'https://5ee7807effee0c0016a12329.mockapi.io/stickers',
  headers: {
    'Content-Type': 'application/json',
  },
});