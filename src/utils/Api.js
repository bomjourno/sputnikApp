import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getFollowers() {
    return axios.get(`${this.baseUrl}/followers`);
    // console.log('asd', axios);
  }

  getUserData() {
    return axios.get(`${this.baseUrl}`);
  }
}

export default api = new Api({
  baseUrl: 'https://api.github.com/users/GantMan',
});
