import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import {
  Map as GDMap,
  APILoader,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
  Marker,
} from '@uiw/react-amap';
import { IndexModel } from '@/pages/index/store';
interface MapProps {
  setPosition: ({ lng, lat }: { lng: string; lat: string }) => void;
}

export const Map = observer(function ({ setPosition }: MapProps) {
  const store = IndexModel();
  const state = useLocalObservable(() => ({
    data: {},
  }));
  return (
    <div style={{ width: 'calc(100vw - 380px)', height: 'calc(100vh - 0px)' }}>
      <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
        <GDMap
          mapStyle="'amap://styles/grey'"
          zoom={8}
          center={[120.153576, 30.287459]}
          onClick={(e) => {
            setPosition({ lng: e.lnglat.lng, lat: e.lnglat.lat });
          }}
        >
          <Geolocation
            type="cityInfo"
            // 是否使用高精度定位，默认:true
            enableHighAccuracy={true}
            // 超过10秒后停止定位，默认：5s
            timeout={10000}
            // 定位按钮的停靠位置
            position="RB"
            // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            // offset={new AMap.Pixel(10, 20)}
            // 定位成功后是否自动调整地图视野到定位点
            zoomToAccuracy={true}
            onComplete={(data) => {
              console.log('返回数据：', data);
              setPosition({ lng: data.position[0], lat: data.position[1] });
              state.data = data;
            }}
            onError={(data) => {
              console.log('错误返回数据：', data);
              // state.data = data
              // setData(data);
            }}
          />
          {/* <pre style={{ padding: 10, marginTop: 10 }}>
            {state.data ? JSON.stringify(state.data, null, 2) : '{正在获取}'}
          </pre> */}
          <Marker visiable={true} title="北京市" />
          <ScaleControl offset={[16, 30]} position="LB" />
          <ToolBarControl offset={[16, 100]} position="LB" />
          <ControlBarControl offset={[16, 80]} position="RB" />
        </GDMap>
      </APILoader>
    </div>
  );
});
