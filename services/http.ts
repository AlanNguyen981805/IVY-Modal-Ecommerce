import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8888/api/v1/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getInstanceWithToken(): AxiosInstance {
    const token = Cookies.get('user') as any;
    const parseToken = token ? JSON.parse(token).token : '';

    const instanceWithToken = axios.create({
      baseURL: 'http://localhost:8888/api/v1/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bears ${parseToken}`,
      },
    });

    return instanceWithToken;
  }
}

const instance = new Http();
const http = instance.getInstanceWithToken();

export default http;
