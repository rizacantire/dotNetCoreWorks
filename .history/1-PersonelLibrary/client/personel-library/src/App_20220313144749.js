import React from "react";
import { Row, Col } from "antd";
import SiteHeader from "./components/layouts/SiteHeader";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";

export default function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <SiteHeader/>
        </Col>
      </Row>
      <Row className="site-layout-background" style={{ padding: '24px 100px' }}>
        <Col  span={4}><SideNavi/></Col>
        <Col span={20}><Dashboard/></Col>
      </Row>
    </div>
  );
}
