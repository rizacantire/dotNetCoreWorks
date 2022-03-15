import React from 'react'
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addBookAsync } from '../../../redux/reducers/bookSlice';

export default function BookAdd() {
  let book = { 
    "name": "string",
    "page": 0,
    "authorId": 0,
    "categoryId": 0}

    const dispatch = useDispatch();
    const [form] = Form.useForm();
  
    const handleSubmit = async (values) => {
  
      if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
        await dispatch(addBookAsync(values));
        form.resetFields()
      }
    };
  return (
    <div>
       <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item rules={[{required: true,},]} name="name" label="Kitap Adı">
          <Input />
        </Form.Item>

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
