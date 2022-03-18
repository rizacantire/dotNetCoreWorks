import React, { useEffect } from "react";
import { Form, Input, Button,DatePicker,message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthorAsync } from "../../../redux/reducers/authorSlice";
import moment from 'moment';
import {successed,denied} from "../../../redux/helpers/messageHelper"

export default function AuthorUpdate(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dateFormat = 'DD-MM-YYYY';
  const changeUpdate = async(values) => {
  
  const author = {
    id:props.updatedItem.id,
    ...values,
    'birthDate': values['birthDate']&&values['birthDate'].format('YYYY-MM-DD'),
    
  };
   if(window.confirm("Güncellemek istediğine emin misin?"))
   {
    props.setIsUpdate(false);
    let result = await dispatch(updateAuthorAsync(author))
    result.error?denied():successed()

   }
   
  };

  const cancelUpdate=()=>{
    props.setIsUpdate(false);
  }
  
  useEffect(() => {
      form.resetFields()
    }, [props.updatedItem,form]);

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
      initialValue={props.updatedItem.birthDate&&moment(props.updatedItem.birthDate, dateFormat)}  format={dateFormat}
      >
        <DatePicker  />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">Güncelle</Button>
        <Button  type="primary" danger onClick={cancelUpdate}>İptal</Button>
      </Form.Item>
    </Form>
    </div>
  );
}
