import { action } from 'mobx';
import { http } from '../utils/request';
import api from '@/../utils/api';

export class Weather {
  @action
  async getCity(location: string) {
    return await http.get('/v2/city/lookup', {
      params: {
        location,
      },
    });
  }

  @action
  async getWeatherNow(location: string) {
    return await http.get(api.GetWeatherNow, {
      params: {
        location,
      },
    });
  }

  @action
  async getWeather({ time, location }: { time: string; location: string }) {
    const data = await http.get(api.GetWeather + time, {
      params: {
        location,
      },
    });
    return data;
  }

  @action
  async getIndicesWeatherDay(location: string) {
    return await http.get(api.GetIndicesWeatherDay, {
      params: {
        location,
        type: 0,
      },
    });
  }

  @action
  async getAir(location: string) {
    return await http.get(api.GetAirNow, {
      params: {
        location,
      },
    });
  }
}
