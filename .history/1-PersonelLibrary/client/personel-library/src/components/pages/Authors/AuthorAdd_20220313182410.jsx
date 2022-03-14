import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

export default function AuthorAdd() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{margin:"auto"}}>
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 12 }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Adı"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Lütfen Yazar Adını Girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Soyad"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Lütfen Yazar'ın soyadını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
