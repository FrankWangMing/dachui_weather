import { observer, useLocalStore } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Col, List, Row } from 'antd';
import moment from 'moment';
import { Title } from '@/../component/Title';
import { Bullet, Column } from '@ant-design/charts';
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
  margin: 5px 0;
  .card_top {
    height: 25px;
  }
  .card_middle {
    height: 75px;
  }
  .card_bottom {
    height: 20px;
  }
  #colorTem {
    background: linear-gradient(to bottom, #eb9d84, #92b1ff);
    width: 5px;
    border-radius: 5px;
    margin: 0 2px;
  }
`;
interface FutureoneDayProp {
  data: any;
}

export const FutureoneDay = observer(function ({ data }: FutureoneDayProp) {
  return (
    <Wrapper>
      <div>
        <Title title={'未来24小时天气预报'}></Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '170px',
            overflow: 'hidden',
            overflowX: 'scroll',
            width: '340px',
          }}
        >
          {data.map((item: any, index: React.Key | null | undefined) => {
            console.log(item);
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  margin: '0 3px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '40px',
                }}
              >
                <span>{item.temp}°</span>
                <span
                  id="colorTem"
                  style={{ height: `${50 * item.temp * 0.02 + 30}px` }}
                ></span>
                <img
                  style={{ width: '25px' }}
                  src={require(`@/../const/icon/${item?.icon}.png`)}
                />
                <span style={{ fontSize: '10px' }}>
                  {moment(item.fxTime).format('HH:mm')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
});
