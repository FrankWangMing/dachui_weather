import { observer, useLocalStore } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Liquid, Progress } from '@ant-design/charts';
import { Title } from '@/../component/Title';
import { AirLiquid } from './AirLiquid';
import { useUpdateEffect } from '@umijs/hooks';

const Wrapper = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 10px;
  width: 360px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  .left_liquid {
    width: 160px;
    height: 160px;
  }
  .right_div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    .right_liquid {
      width: 80px;
      height: 80px;
    }
  }
`;
interface AirProp {
  data: any;
}
interface airconfigProp {
  key: string;
  title: string;
  unix: string;
  value?: number;
}

export const Air = observer(function ({ data }: AirProp) {
  console.log(data);
  const proconfig = {
    height: 15,
    width: 100,
    autoFit: false,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  const airconfig: airconfigProp[] = [
    {
      key: 'pm2p5',
      title: 'PM2.5',
      unix: 'ug/m3',
    },
    {
      key: 'pm10',
      title: 'PM10',
      unix: 'ug/m3',
    },
    {
      key: 'so2',
      title: 'SO2',
      unix: 'ug/m3',
    },
    {
      key: 'co',
      title: 'CO',
      unix: 'ug/m3',
    },
    {
      key: 'o3',
      title: 'O3',
      unix: 'ug/m3',
    },
    {
      key: 'no2',
      title: 'NO2',
      unix: 'ug/m3',
    },
  ];
  const state = useLocalStore(() => ({
    airconfig: airconfig,
    airAqi: data.aqi,
  }));
  useUpdateEffect(() => {
    state.airconfig.map((item) =>
      Object.assign(item, {
        value: data[item.key],
      }),
    );
  }, [data]);
  console.log(state.airconfig);
  return (
    <Wrapper>
      <Title title={'空气质量'} />
      <div style={{ display: 'flex', height: '200px' }}>
        <Liquid className="left_liquid" percent={state.airAqi} />
        <div className="right_div">
          {state.airconfig.map((item, index) => {
            console.log(item.value);
            return (
              <div key={index} style={{ margin: '10px 5px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <h4>{item.value}</h4>
                  <h5 style={{ paddingLeft: '5px' }}>
                    {item.unix}
                    {' ' + item.title}
                  </h5>
                </div>
                <Progress
                  percent={(item?.value as number) / 100}
                  {...proconfig}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
});
