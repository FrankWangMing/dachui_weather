import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;

export default (props: { children: React.ReactNode }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      {/* <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header> */}
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
