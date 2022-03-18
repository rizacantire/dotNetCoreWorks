import React from "react";
import { Form, Input, Button } from "antd";
import { signInAsync } from "../../../redux/reducers/authenticationSlice";
import { useDispatch } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
export default function SignIn(props) {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    let result = dispatch(signInAsync(values));
    console.log(result);
    result.error?denied("Hatalı bilgi girildi"):successed("Giriş başarılı")

  };

  const singUpButton = ()=>{
    props.setIsSingUp(!props.isSingUp)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
        <Form
          style={{
            padding: "60px 0px",
            backgroundColor: "#c3cee0",
            opacity: "0.7",
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
            <Button
              style={{ marginLeft: "30px" }}
              type="primary"
              htmlType="submit"
            >
              Giriş Yap
            </Button>
            <Button style={{ marginLeft: "40px" }} type="primary" onClick={singUpButton}>
              Yeni Hesap Oluştur
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
}
