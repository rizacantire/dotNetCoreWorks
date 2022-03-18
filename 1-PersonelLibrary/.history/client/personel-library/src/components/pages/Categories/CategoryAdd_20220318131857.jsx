import { Form, Input, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryAsync } from "../../../redux/reducers/categorySlice";
import {Success,Errors} from "../../../redux/helpers"
export default function CategoryAdd() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const status = useSelector((state)=>state.categories.status)

  const handleSubmit = async (values) => {

    if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
      await dispatch(addCategoryAsync(values));
      form.resetFields()
      status==="Success"?( Success()):(Errors())
     
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

