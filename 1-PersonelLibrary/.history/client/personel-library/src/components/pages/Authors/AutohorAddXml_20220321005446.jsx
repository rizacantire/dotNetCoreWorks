import { Form,Input } from 'antd'
import React from 'react'

export default function AutohorAddXml() {
    const [form] = Form.useForm();

  return (
    <div>
        <Form  form={form}
            onFinish={onFinish}
            onFinishFailed={error}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal">
      <Form.Item>
        <Input type="file"/>
      </Form.Item>
    </Form>
    </div>
  )
}
authorXmlList