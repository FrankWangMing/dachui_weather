import { Weather } from '@/../domain/Weather';
import { Map } from '@/pages/index/Map';
import styled from 'styled-components';
import { Weather as WeatherCard } from './weather/Weather';
import { Future } from './weather/Future';
import { FutureoneDay } from './weather/FutureoneDay';

import { Air } from './weather/Air';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useUpdateEffect } from '@umijs/hooks';
import { IndexModel, IndexContext } from './store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #faf5f5;
  .slide_right {
    padding: 10px;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 0px);
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default observer(function IndexPage() {
  const store = IndexModel();
  const state = useLocalObservable(() => ({
    futureWeather: [],
    futureWeatheroneDay: [],
    nowWeather: {},
    city: {},
    IndicesWeather: [],
    airData: [],
  }));
  store.indexState = state;

  const wt = new Weather();
  useUpdateEffect(() => {
    console.log('change');
    wt.getCity(`${store.lng},${store.lat}`).then((data) => {
      state.city = data.data.location && data.data.location[0];
    });
    wt.getWeatherNow(`${store.lng},${store.lat}`).then((data) => {
      state.nowWeather = data.data.now;
    });
    wt.getWeather({
      time: '/7d',
      location: `${store.lng},${store.lat}`,
    }).then((res) => {
      console.log(res);
      state.futureWeather = res.data.daily;
    });
    wt.getWeather({
      time: '/24h',
      location: `${store.lng},${store.lat}`,
    }).then((res) => {
      console.log(res);
      state.futureWeatheroneDay = res.data.hourly;
    });
    wt.getIndicesWeatherDay(`${store.lng},${store.lat}`).then((res) => {
      console.log(res.data.daily);
      state.IndicesWeather = res.data.daily;
    });
    wt.getAir(`${store.lng},${store.lat}`).then((res) => {
      console.log(res.data.now);
      state.airData = res.data.now;
    });
  }, [store.lat, store.lng]);

  // wt.getIndicesWeatherDay("101010100").then(data => {
  //   console.log(data)
  // })

  return (
    <IndexContext.Provider value={store}>
      <Wrapper>
        <Map setPosition={store.setPosition} />
        <div className="slide_right">
          <WeatherCard
            data={{
              ...state.nowWeather,
              ...state.city,
              indicesWeather: state.IndicesWeather,
            }}
          />
          <FutureoneDay data={state.futureWeatheroneDay} />
          <Future data={state.futureWeather} />
          <Air data={state.airData} />
        </div>
      </Wrapper>
    </IndexContext.Provider>
  );
});
