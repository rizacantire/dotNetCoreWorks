import React from 'react'
import { Card, Col, Row } from 'antd';

export default function UserBooksForAdmin() {
  return (
    <div className="site-card-wrapper">
    <Row gutter={20}>
      <Col style={{marginBottom:"2em"}} span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    
    </div>
  )
}
