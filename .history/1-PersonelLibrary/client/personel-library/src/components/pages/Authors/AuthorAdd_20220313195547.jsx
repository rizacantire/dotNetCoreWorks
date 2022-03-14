import React, {  useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import {  useDispatch } from "react-redux";
import {addAuthorAsync} from "../../../redux/reducers/authorSlice"

export default function AuthorAdd() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("asd")
    const [lastName, setLastName] = useState("asdasd")
    const [form] = Form.useForm();

  const handleSubmit  = async(values) => {
    console.log("Success:", values);
    
    form.resetFields();

    if(window.confirm("Ekleme gerçekleştirilsin mi?")){
        //await dispatch(addAuthorAsync(values));
        form.resetFields();
        values="";
    }   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{margin:"auto"}}>
      <Form  form={form} name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={handleSubmit }
        onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item  name="firstName" label="Adı"  rules={[{required: true,message: "Lütfen Yazar Adını Girin!",},]} >
          <Input />
        </Form.Item>

        <Form.Item name="lastName"  label="Soyad" rules={[{required: true,message: "Lütfen Yazar'ın soyadını girin!",},]}>
          <Input/>
        </Form.Item>
        <Form.Item name="birthDate" label="Doğum Tarihi">
        <DatePicker />
      </Form.Item>
        <Form.Item  wrapperCol={{offset: 8,span: 16,}}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
