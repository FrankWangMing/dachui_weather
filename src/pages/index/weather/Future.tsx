import { observer, useLocalStore } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Col, List, Row } from 'antd';
import moment from 'moment';
import { Title } from '@/../component/Title';
import { Bullet } from '@ant-design/charts';
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
    background: linear-gradient(to right, #eb9d84, #92b1ff);
    width: 100px;
    height: 5px;
    border-radius: 5px;
    margin: 0 2px;
  }
`;
interface FutureProp {
  data: any;
}

export const Future = observer(function ({ data }: FutureProp) {
  console.log(data);
  return (
    <Wrapper>
      <div>
        <Title title={'未来七天天气预报'}></Title>
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ paddingRight: '5px' }}>
                  {
                    ['周末', '周一', '周二', '周三', '周四', '周五', '周六'][
                      moment(item.fxDate).day()
                    ]
                  }
                </span>
                <img
                  style={{ width: '35px' }}
                  src={`icon/${item?.iconDay}.svg`}
                />
                <span>{item?.tempMax}°</span>
                <span id="colorTem"></span>
                <span>{item?.tempMin}°</span>
                <img
                  style={{ width: '35px' }}
                  src={`icon/${item?.iconNight}.svg`}
                />
              </div>
            </List.Item>
          )}
        />
      </div>
    </Wrapper>
  );
});
