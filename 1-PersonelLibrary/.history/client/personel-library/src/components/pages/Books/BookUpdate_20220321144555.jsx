import { Form,Button,Input } from 'antd'
import React from 'react'

export default function BookUpdate() {
  const [form] = Form.useForm();

  return (
    <div>
      <Form form={form} name="horizontal_login" layout="inline" >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
         
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
    </div>
  )
}
