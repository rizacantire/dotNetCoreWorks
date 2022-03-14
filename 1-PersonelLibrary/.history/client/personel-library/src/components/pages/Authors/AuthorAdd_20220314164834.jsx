import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { addAuthAsync } from "../../../redux/reducers/authorsSlice";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/lib/locale/zh_CN";

export default function AuthorAdd() {

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    //e.preventDefault()
    let commentator = { firstName: firstName, lastName: lastName };
    if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
      await dispatch(addAuthAsync(commentator));
      setFirstName("");
      setLastName("");
    }
  };
  
  const [form] = Form.useForm();
  const onFinish = (fieldsValue) => {
    
    const values = {
      ...fieldsValue,
      'birthDate': fieldsValue['birthDate']&&fieldsValue['birthDate'].format('YYYY-MM-DD'),
    };
    console.log('Received values of form: ', values);
  }
    

  
  return (
    <div style={{ margin: "auto" }}>
      <Form
       form={form}
            onFinish={onFinish}

      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
    >
      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="firstName" label="İsim">
        <Input />
      </Form.Item>

      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="lastName" label="Soyisim">
        <Input />
      </Form.Item>
      
      
      <Form.Item name="birthDate" label="Doğum Tarihi">
        <DatePicker />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">Ekle</Button>
      </Form.Item>
    </Form>
    </div>
  );
}
