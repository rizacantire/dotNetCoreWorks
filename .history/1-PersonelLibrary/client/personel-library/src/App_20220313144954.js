import React from "react";
import { Row, Col } from "antd";
import SiteHeader from "./components/layouts/SiteHeader";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import SiteFooter from "./components/layouts/SiteFooter";

export default function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <SiteHeader />
        </Col>
      </Row>
      <Row className="site-layout-background" style={{ padding: "24px 100px" }}>
        <Col className="site-layout-background" span={4}>
          <SideNavi />
        </Col>
        <Col
          className="site-layout-background"
          style={{ padding: "0px 30px" }}
          span={20}
        >
          <Dashboard />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <SiteFooter />
        </Col>
      </Row>
    </div>
  );
}
