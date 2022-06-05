import axios from 'axios';

class Api {
  constructor(props) {
    this.baseUrl = props.baseUrl;
  }

  getFollowers() {
    return axios.get(`${this.baseUrl}/followers`);
  }

  getUserData() {
    return axios.get(`${this.baseUrl}`);
  }

  getRepos() {
    return axios.get(`${this.baseUrl}/repos`);
  }
}

export const api = new Api({
  baseUrl: 'https://api.github.com/users/sGantMan',
});
