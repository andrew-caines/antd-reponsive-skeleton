import React, { useState } from 'react';
import { Icon, Layout, Menu } from 'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSiderCollapse = () => {
    setSiderCollapsed(!siderCollapsed);
  }

  return (
    <Layout >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={siderCollapsed}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={toggleSiderCollapse}
      >
        <div className="logo">Dashboard v1.0</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
