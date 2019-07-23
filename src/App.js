import React, { useReducer, Suspense } from 'react';
import { Icon, Layout, Menu, Spin } from 'antd';
import { Router, navigate } from '@reach/router';
import './App.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import KioIcon from './Icons/KioLogoSvg';
const { Header, Footer, Sider, Content } = Layout;
const Home = React.lazy(() => import('./Home'));

//UI State & Reducer
const menuInitialState = {
  current: '/',
  collapsed: true
}

function menuReducer(state, action) {
  switch (action.type) {
    case 'menuClick':
      navigate(action.payload);
      return { ...state, current: action.payload }
    case 'toggleCollapse':
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
}


function App() {
  //forms files videos
  const [state, dispatch] = useReducer(menuReducer, menuInitialState);

  return (
    <Layout >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={state.collapsed}
        onBreakpoint={broken => {
          //console.log(broken);
        }}
        onCollapse={(e) => dispatch({ type: 'toggleCollapse' })}
      >
        <div className="logo" onClick={e => dispatch({ type: 'menuClick', payload: '/' })} ><Icon type="home" /> Dashboard v1.0</div>
        <Menu theme="dark" mode="inline" onClick={e => dispatch({ type: 'menuClick', payload: e.key })}>
          <SubMenu title={
            <span className="submenu-title-wrapper">
              <Icon type="snippets" />
              Reports
            </span>
          }>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-area-chart"><Icon type="area-chart" /> Area Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-pie-chart"><Icon type="pie-chart" /> Pie Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-bar-chart"><Icon type="bar-chart" /> Bar Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-dot-chart"><Icon type="dot-chart" /> Dot Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-line-chart"><Icon type="line-chart" /> Line Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-radar-chart"><Icon type="radar-chart" /> Radar Chart</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/reports/report-heat-map"><Icon type="heat-map" /> Heat Map</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu title={
            <span className="submenu-title-wrapper">
              <Icon type="appstore" />
              Applications
            </span>
          }>
            <Menu.ItemGroup>
              <Menu.Item key="/delivery-app"><Icon type="car" /> Delivery App</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.Item key="/kio-app"><KioIcon /> K.I.O</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="/videos">
            <Icon type="video-camera" />
            <span className="nav-text">Video's</span>
          </Menu.Item>
          <Menu.Item key="/files">
            <Icon type="file" />
            <span className="nav-text">Files</span>
          </Menu.Item>
          <Menu.Item key="/forms">
            <Icon type="form" />
            <span className="nav-text">Forms</span>
          </Menu.Item>
          <Menu.Item key="/policy">
            <Icon type="read" />
            <span className="nav-text">Policy</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0 40px' }}>
          <Suspense fallback={<Spin tip="Loading" size="large" />}>
            <Router>
              <Home path="/" />
            </Router>
          </Suspense>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Andrew Caines ©2019</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
