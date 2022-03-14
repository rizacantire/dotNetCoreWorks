import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";

export default function AuthorAdd() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{margin:"auto"}}>
      <Form name="basic" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onFinish={onFinish}
        onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item label="Adı" name="firstName" rules={[{required: true,message: "Lütfen Yazar Adını Girin!",},]} >
          <Input />
        </Form.Item>

        <Form.Item label="Soyad" name="lastName" rules={[{required: true,message: "Lütfen Yazar'ın soyadını girin!",},]}>
          <Input />
        </Form.Item>
        <Form.Item label="Doğum Tarihi">
        <DatePicker />
      </Form.Item>
        <Form.Item name="birthDate" wrapperCol={{offset: 8,span: 16,}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
