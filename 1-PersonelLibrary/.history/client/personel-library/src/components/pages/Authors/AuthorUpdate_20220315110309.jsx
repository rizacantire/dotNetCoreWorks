import React, { useEffect } from "react";
import { Form, Input, Button,DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { updateAuthorAsync } from "../../../redux/reducers/authorSlice";
export default function AuthorUpdate(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const changeUpdate = (values) => {
    
  const author = {values}
  //  if(window.confirm("Güncellemek istediğine emin misin?"))
  //  {
  //   //props.setIsUpdate(false);
  //   //dispatch(updateAuthorAsync(author))
  //  }
    console.log(author);
    console.log(props);
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

      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
    >
      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="firstName" label="İsim"
        initialValue={props.updatedItem.firstName}
        >
        <Input />
      </Form.Item>

      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="lastName" label="Soyisim"
        initialValue={props.updatedItem.lastName}
        >
        <Input />
      </Form.Item>
      
      
      <Form.Item name="birthDate" label="Doğum Tarihi"
      //initialValue={props.updatedItem.birthDate}
      >
        <DatePicker />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">Güncelle</Button>
        <Button  type="primary" danger onClick={cancelUpdate}>İptal</Button>
      </Form.Item>
    </Form>
    </div>
  );
}
