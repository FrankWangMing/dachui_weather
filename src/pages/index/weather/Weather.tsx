import { observer, useLocalObservable, useLocalStore } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { IconFont } from '@/../const/iconfont';
import { Col, Row } from 'antd';
import moment from 'moment';
import { useUpdateEffect } from '@umijs/hooks';
const Wrapper = styled.div`
  background-color: #696969;
  color: white;
  border-radius: 5px;
  padding: 10px;
  width: 360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .card_top {
    height: 25px;
  }
  .card_middle {
    height: 75px;
  }
  .card_bottom {
    height: 20px;
  }
`;
interface WeatherProp {
  data: any;
}

export const Weather = observer(function ({ data }: WeatherProp) {
  console.log(data);
  useUpdateEffect(() => {
    // data?.indicesWeathe.map(item => {
    //     console.log(item)
    // })
  }, [data.indicesWeather]);
  // const state = useLocalStore(() => ({
  //     ziwaixian: data.indicesWeather[1]
  // }))
  // const store = useContext(IndexContext)
  // console.log(store)
  // const
  return (
    <div>
      {data && (
        <Wrapper>
          <Row style={{ width: '100%' }}>
            <Col span={8}>
              <div
                className="card_top"
                style={{ fontSize: '15px', lineHeight: '25px' }}
              >
                {data?.name}
                {`${data?.adm2 != data?.name ? ` / ${data?.adm2}` : ''}`}
              </div>
              <div
                className="card_middle"
                style={{ fontSize: '55px', lineHeight: '75px' }}
              >
                {data.temp}°
              </div>
              <div
                className="card_bottom"
                style={{ fontSize: '13px', lineHeight: '20px' }}
              >
                {data.windDir}
                {data.windSpeed}级
              </div>
            </Col>
            <Col span={6}>
              <div className="card_top" style={{ fontSize: '15px' }}></div>
              <div className="card_middle" style={{ fontSize: '35px' }}>
                {data.text}
              </div>
              <div
                className="card_bottom"
                style={{ fontSize: '13px', lineHeight: '20px' }}
              >{`紫外线${
                data.indicesWeather[1] && data.indicesWeather[1]?.category
              }`}</div>
            </Col>
            <Col span={10} style={{ direction: 'rtl' }}>
              <div className="card_top" style={{ fontSize: '15px' }}>
                {moment(data.obsTime).format('YYYY-MM-DD HH:mm')}
              </div>
              <div className="card_middle" style={{ fontSize: '45px' }}>
                <div>
                  {data?.icon && (
                    <img src={require(`@/../const/icon/${data?.icon}.png`)} />
                  )}
                </div>
              </div>
              <div
                className="card_bottom"
                style={{ fontSize: '13px', lineHeight: '20px' }}
              >
                相对湿度{data.humidity}%
              </div>
            </Col>
          </Row>
          <div>{data.text}</div>
        </Wrapper>
      )}
    </div>
  );
});
