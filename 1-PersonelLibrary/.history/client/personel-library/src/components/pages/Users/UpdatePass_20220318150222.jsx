import { Form,Input,Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { updatePassAsync } from '../../../redux/reducers/userSlice';
import {successed,denied} from "../../../redux/helpers/messageHelper"

export default function UpdatePass({updateUser}) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const handleSubmit = async (values) => {

      if (window.confirm("Şifre Güncellemek istediğinden emin misin?")) {
        let result = await dispatch(updatePassAsync(values));
        result.error?denied():successed()
        form.resetFields()
      }
    };
    
    useEffect(() => {
        form.resetFields()
      }, [updateUser,form]);
  return (
    <div style={{marginTop:"40px"}}>
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
          initialValue={updateUser.email}

        >
          <Input disabled={true} />
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
            Güncelle
          </Button>
        </Form.Item>
      </Form>
       
       
    </div>
  )
}
