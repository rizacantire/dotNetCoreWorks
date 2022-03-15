import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import background from "../../../images/back-ground.jpg";
import background2 from "../../../images/photo-152717693060.jpg";

export default function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "830px",
        backgroundSize: "cover",
      }}
    >
      <Card
        title="Giriş Ekranı"
        style={{ width: 900, margin: "auto" }}
      >
        <Form
          style={{
          
            backgroundColor: "#79b8b8",
          }}
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
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
      </Card>
    </div>
  );
}
