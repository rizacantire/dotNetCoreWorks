import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form,Input,Button,DatePicker,message} from 'antd';
import { addAuthorAsync } from "../../../redux/reducers/authorSlice";

export default function AuthorAdd() {
  const dispatch = useDispatch();
  
  const [form] = Form.useForm();
  const onFinish = async(fieldsValue) => {
    let values;
    const fullEntity = {
      ...fieldsValue,
      'birthDate': fieldsValue['birthDate']&&fieldsValue['birthDate'].format('YYYY-MM-DD')
    }
    const nullEntity ={
      firstName: fieldsValue['firstName'],
      lastName: fieldsValue['lastName']
    }
    
    fieldsValue['birthDate']===undefined?(values=nullEntity):(values=fullEntity)

    if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
     let a =  await dispatch(addAuthorAsync(values))
     
      form.resetFields()
      console.log(a.error);
    }
    
  }
  return (
    <div style={{ margin: "auto" }}>
      <Form
       form={form}
            onFinish={onFinish}
            onFinishFailed={error}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
    >
      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="firstName" label="İsim">
        <Input />
      </Form.Item>

      <Form.Item rules={[
          {
            required: true,
          },
        ]} name="lastName" label="Soyisim">
        <Input />
      </Form.Item>
      
      
      <Form.Item name="birthDate" label="Doğum Tarihi">
        <DatePicker format={'DD-MM-YYYY'} />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">Ekle</Button>
      </Form.Item>
    </Form>
    </div>
  );
}


const success = () => {
  message.success('Ekleme işlemi başarılı');
};

const error = () => {
  message.error('Ekleme gerçekleşmedi');
};
