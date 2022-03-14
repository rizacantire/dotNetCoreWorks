import React from "react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import SiteHeader from "./components/layouts/SiteHeader";
import { Layout, Menu } from "antd";
import {UserOutlined,LaptopOutlined,NotificationOutlined} from "@ant-design/icons";
import SiteFooter from "./components/layouts/SiteFooter";

export default function App() {
  const { SubMenu } = Menu;
  const { Header, Dashboard, SideNavi } = Layout;
  
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <SiteHeader />
        </Header>
        <Dashboard style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <SideNavi className="site-layout-background" width={200}>
              
            </SideNavi>
            <Dashboard/>
          </Layout>
        </Dashboard>
        <SiteFooter/>
      </Layout>
    </div>
  );
}
