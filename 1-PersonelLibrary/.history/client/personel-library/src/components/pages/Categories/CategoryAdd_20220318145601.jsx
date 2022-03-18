import { Form, Input, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addCategoryAsync } from "../../../redux/reducers/categorySlice";
import {successed,denied} from "../../../redux/helpers/messageHelper"

export default function CategoryAdd() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
      let result = await dispatch(addCategoryAsync(values));
      form.resetFields()
      result.error?denied():successed()
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
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          name="name"
          label="Kategori"
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

