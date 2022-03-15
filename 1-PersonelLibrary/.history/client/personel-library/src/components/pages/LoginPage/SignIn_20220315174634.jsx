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
        height: "900px",
        backgroundSize: "cover",
      }}
    >
      <div style={{ paddingTop: "150px" }}>
        <Card
          style={{
            width: 900,
            margin: "auto",
            backgroundColor: "transparent",
            border: "none",
            
          

          }}
        >
            <h1 style={{textAlign: "center",  fontFamily: "Cursive"
}}>Giriş Ekranı</h1>
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
              name="username"
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
              <Button style={{marginLeft:"10px"}} type="primary" htmlType="submit">
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
