import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateCategoryAsync } from "../../../redux/reducers/categorySlice";
export default function CategoryUpdate(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const changeUpdate = (values) => {
    props.setIsUpdate(false);
    const category = {id:props.updateItemName.id,name:values}
    //dispatch(updateCategoryAsync(values))
    console.log(category);
  };
  
  useEffect(() => {
      form.resetFields()
    }, [props.updateItemName,form]);

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
          initialValue={props.updateItemName.name}
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
