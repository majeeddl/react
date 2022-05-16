import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Intro = React.lazy(() => import("./Tutorial/Intro"));
const Components = React.lazy(() => import("./Tutorial/Components"));
const Events = React.lazy(() => import("./Tutorial/Events"));

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <span
              className="logo"
              style={{ color: "white", float: "left", fontSize: "23px" }}
            >
              React Learning
            </span>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" title="Tutorial">
                  <Menu.Item key="1">
                    <Link to="/intro">Intro</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/components">Components</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/events">Events</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/components" element={<Components />} />
                    <Route path="/events" element={<Events />} />
                  </Routes>
                </React.Suspense>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
