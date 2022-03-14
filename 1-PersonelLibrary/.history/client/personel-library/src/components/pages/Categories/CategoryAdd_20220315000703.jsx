import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryAsync } from "../../../redux/reducers/categorySlice";

export default function CategoryAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    //e.preventDefault()
    console.log(values);
    // let commentator = { name: name };
    // if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
    //   await dispatch(addCategoryAsync(commentator));
    //   setName("");
    // }
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 7 }}
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
