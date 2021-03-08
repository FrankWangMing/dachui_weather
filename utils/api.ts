export default {
  // target: "https://api.qweather.com/v7/warning/now",
  GetCityMessage: '/v2/city/lookup',
  PioMessageSearch: '/v2/poi/lookup',
  TopCity: '/v2/city/top',
  PioRangeSearch: '/v2/poi/range',

  //城市天气API
  GetWeatherNow: '/v7/weather/now',
  GetWeather: '/v7/weather',

  //72h/ 168h / 3d / 7d / 15d
  // 格点天气
  GetMinutelyWeather: '/v7/minutely/5m',
  GetGridWeather: '/v7/grid-weather/7d',

  //  当天生活指数
  GetIndicesWeatherDay: '/v7/indices/1d',

  // 天气灾害预警
  GetWarning: '/v7/warning/now',
  // 天气预警城市列表
  GetWarningCity: '/v7/warning/list',

  //历史天气
  GetHistoryWeather: '/v7/historical/weather',
  GetHistoryAir: '/v7/historical/air',

  //空气质量
  GetAirNow: '/v7/air/now',

  //天文API
  GetAstronomySun: '/v7/astronomy/sun',
  GetAstronomySunAngle: '/v7/astronomy/solar-elevation-angle?',
  GetAstronomyMoon: '/v7/astronomy/moon',

  //潮汐
  GetOceanTide: '/v7/ocean/tide',
  GetOceanCurrents: '/v7/ocean/currents',
};
