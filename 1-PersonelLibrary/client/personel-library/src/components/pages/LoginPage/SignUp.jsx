import React from "react";
import { Form, Input, Button } from "antd";
import { signInAsync } from "../../../redux/reducers/authenticationSlice";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(signInAsync(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    
    <div>
      <Form
            style={{
              padding: "60px 0px",
              backgroundColor: "#c3cee0",
              opacity: "0.7"
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
              label="İsim"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Lütfen adınızı giriniz!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Soyisim"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Lütfen soyadınızı giriniz!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Kullanıcı Adı"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Lütfen kullanıcı adınızı giriniz!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Şifre"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen şirenizi giriniz!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button style={{marginLeft:"80px"}} type="primary" htmlType="submit">
                Kayıt Ol
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
}
