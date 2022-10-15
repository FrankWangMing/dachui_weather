import axios from 'axios';
import { WeatherKey } from '../public/config';

export const http = axios.create({
  baseURL: 'https://devapi.qweather.com',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

http.interceptors.request.use((config) => {
  config.params.key = WeatherKey;
  if (['/v2/city/lookup'].includes(config.url as string)) {
    config.baseURL = 'https://geoapi.qweather.com';
  }
  return config;
});
