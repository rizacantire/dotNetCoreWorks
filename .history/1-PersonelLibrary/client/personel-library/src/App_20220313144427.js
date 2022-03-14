import React from "react";
import { Row, Col } from "antd";
import SiteHeader from "./components/layouts/SiteHeader";

export default function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <SiteHeader/>
        </Col>
      </Row>
      <Row style={{ padding: '24px 0' }}>
        <Col  span={4}>col-12</Col>
        <Col span={20}>col-12</Col>
      </Row>
    </div>
  );
}
