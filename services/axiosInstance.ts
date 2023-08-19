import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

const instance = axios.create({
  baseURL: 'http://localhost:8888/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // .. other options
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token: any = getCookie('user');
  const parseToken = token ? JSON.parse(token).token : '';

  console.log('parseToken :>> ', parseToken);

  config.headers.Authorization = parseToken ? `Bears ${JSON.parse(parseToken)}` : '';
  return config;
});

axios.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    console.log('error :>> ', error);
    return Promise.reject(error)
  }
)

export default instance;
