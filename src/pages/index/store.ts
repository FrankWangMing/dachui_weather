import { useLocalObservable } from 'mobx-react-lite';
import React from 'react';

export const IndexModel = function () {
  return useLocalObservable(() => ({
    indexState: {},
    NowWeather: {},
    lng: '',
    lat: '',
    setPosition({ lng, lat }: { lng: string; lat: string }) {
      this.lng = lng;
      this.lat = lat;
    },
  }));
};

export const IndexContext = React.createContext({});
