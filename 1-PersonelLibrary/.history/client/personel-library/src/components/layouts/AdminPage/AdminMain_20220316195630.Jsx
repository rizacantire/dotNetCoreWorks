import React from 'react'
import { Row, Col } from "antd";
import SiteHeader from "../MainPage/SiteHeader"
import SideNavi from "./pages/SideNavi"
import Dashboard from "./pages/Dashboard"
import SiteFooter from "./pages/SiteFooter"

export default function AdminMain() {
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
  )
}
