import axios from 'axios';

class Api {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    // this.findUserUrl = props.findUserUrl;
  }

  getFollowers(user) {
    return axios.get(`${this.baseUrl}/${user}/followers`);
  }

  getUserData(user) {
    return axios.get(`${this.baseUrl}/${user}`);
  }

  getRepos(user) {
    return axios.get(`${this.baseUrl}/${user}/repos`);
  }
}

export const api = new Api({
  // baseUrl: 'https://api.github.com/users/GantMan',
  baseUrl: 'https://api.github.com/users',
});
