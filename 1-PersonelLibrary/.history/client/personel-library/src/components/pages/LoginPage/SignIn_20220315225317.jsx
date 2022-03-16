import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import background from "../../../images/photo-152717693060.jpg";
import { signInAsync } from "../../../redux/reducers/authenticationSlice";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(signInAsync(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "900px",
        backgroundSize: "cover",
      }}
    >
      <div style={{ paddingTop: "150px" }}>
        
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
              <Button style={{marginLeft:"30px"}} type="primary" htmlType="submit">
                Giriş Yap
              </Button>
              <Button  style={{marginLeft:"40px"}}  type="primary">
                Kayıt Ol
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  );
}
