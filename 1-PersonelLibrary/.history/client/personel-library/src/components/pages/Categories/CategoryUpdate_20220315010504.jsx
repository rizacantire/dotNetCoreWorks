import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

export default function CategoryUpdate(props) {
  const changeUpdate = values => {
    //props.setIsUpdate(false);
    console.log(values);
  };
  useEffect(() => {
    console.log(props);
  }, [props]);
  console.log("rendered", props.updateItemName);

  return (
    <div>
      <Form
        onFinish={changeUpdate}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          name="name"
          label="Güncelle"
        >
          <Input value={props.updateItemName} />
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
