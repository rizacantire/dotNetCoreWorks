import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

export default function CategoryUpdate(props) {
  const [form] = Form.useForm();

  let val = props.updateItemName;
  const changeUpdate = (values) => {
    props.setIsUpdate(false);
  };
  useEffect(() => form.resetFields(), [props.updateItemName,form]);

  console.log("rendered", props.updateItemName);

  return (
    <div>
      <Form
        form={form}
        onFinish={changeUpdate}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item
          rules={[
            {
              //required: true,
            },
          ]}
          name="name"
          label="Güncelle"
          initialValue={val}
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
  );
}
