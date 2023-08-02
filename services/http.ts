import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('user') as any
const parseToken = token ? JSON.parse(token).token : ''
class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8888/api/v1/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bears ${parseToken}`
      },
    });
  }
}

const http = new Http().instance;

export default http;
