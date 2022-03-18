import React from "react";
import { useDispatch } from "react-redux";
import {Form,Input,Button,DatePicker} from 'antd';
import { addAuthorAsync } from "../../../redux/reducers/authorSlice";

export default function AuthorAdd() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const onFinish = async(fieldsValue) => {
    const fullEntity = {
      ...fieldsValue,
      'birthDate': fieldsValue['birthDate'].format('YYYY-MM-DD')
    }
    const nullEntity ={
      firstName: fieldsValue['firstName'],
      lastName: fieldsValue['lastName']
    }
   
    let values = {
      // ...fieldsValue,
      // 'birthDate': fieldsValue['birthDate']&&fieldsValue['birthDate'].format('YYYY-MM-DD'),
    };
    fieldsValue['birthDate']===undefined?(values=nullEntity):(values=fullEntity)

    // if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
    //   await dispatch(addAuthorAsync(values))
    //   form.resetFields()
    // }
    console.log(values);
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
