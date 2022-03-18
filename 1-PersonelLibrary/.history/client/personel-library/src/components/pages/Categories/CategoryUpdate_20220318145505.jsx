import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateCategoryAsync } from "../../../redux/reducers/categorySlice";
import {successed,denied} from "../../../redux/helpers/messageHelper"

export default function CategoryUpdate(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const changeUpdate = (values) => {
    
    const category = {id:props.updateItemName.id,name:values.name}
   if(window.confirm("Güncellemek istediğine emin misin?"))
   {
    props.setIsUpdate(false);
    dispatch(updateCategoryAsync(category))
   }
    console.log(category);
  };

  const cancelUpdate=()=>{
    props.setIsUpdate(false);
  }
  
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

        <Form.Item style={{ marginLeft: "40%" }}>
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
          <Button type="primary" danger onClick={cancelUpdate}>
            İptal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
