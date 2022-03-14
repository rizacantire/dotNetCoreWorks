import React from 'react'
import { Form, Input, Button } from "antd";

export default function CategoryUpdate(props) {
   const changeUpdate=()=>{
        props.setIsUpdate(false)
   }
  return (
    <div>
        <Form
        onFinish={changeUpdate}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          name="name"
          label="Güncelle"
          initialValue={props.updateItemName}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
