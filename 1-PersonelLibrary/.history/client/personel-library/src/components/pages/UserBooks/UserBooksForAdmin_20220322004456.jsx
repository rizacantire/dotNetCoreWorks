import React from 'react'
import { Card, Col, Row } from 'antd';

export default function UserBooksForAdmin() {
  return (
    <div className="site-card-wrapper">
       
      <Col span={6}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
  
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    </div>
  )
}