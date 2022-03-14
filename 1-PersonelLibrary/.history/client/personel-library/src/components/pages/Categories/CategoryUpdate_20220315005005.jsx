import React from 'react'
import { Form, Input, Button } from "antd";

export default function CategoryUpdate(props) {
   console.log("porps",props.isUpdate);
   const changeUpdate=()=>{
        props.setIsUpdate(false)
   }
  return (
    <div>CategoryUpdate
        {props.isUpdate}
        <Button onClick={changeUpdate}>Update</Button>
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
          label="Kategori"
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
