import { Form,Input,Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { updatePassAsync } from '../../../redux/reducers/userSlice';

export default function UpdatePass(props) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const handleSubmit = async (values) => {

      if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
        //await dispatch(updatePassAsync(values));
        console.log(values);
        form.resetFields()
      }
    };
    
    useEffect(() => {
        form.resetFields()
      }, [props.updateUser,form]);
  return (
    <div>
        <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item
          name="email"
          label="Mail"
          initialValue={props.updateUser.email}

        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          name="password"
          label="Şifre"
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
        {props.updateUser.email}
       
    </div>
  )
}
