import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, DatePicker } from "antd";
import {addAuthorAsync} from "../../../redux/reducers/authorSlice"

export default function AuthorAdd() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

  const handleSubmit  = async(values) => {
    if(window.confirm("Ekleme gerçekleştirilsin mi?")){
        await dispatch(addAuthorAsync(values));
        form.resetFields();
    }   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{margin:"auto"}}>
      <Form  form={form} name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={handleSubmit }
        onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item  name="firstName" label="Adı"  >
          <Input />
        </Form.Item>

        <Form.Item name="lastName"  label="Soyad" >
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
