import React, { useEffect } from "react";
import { Form, Input, Button,DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import {successed,denied} from "../../../redux/helpers/messageHelper"
import { updateUserBookAsync } from "../../../redux/reducers/userBookSlice";

export default function UpdateUserBook(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dateFormat = 'DD-MM-YYYY';
  const changeUpdate = async(values) => {}
  const getBook = props.currentItem;
  console.log(getBook);

  const cancelUpdate=()=>{
    props.setIsUpdate(false);
  }

  useEffect(() => {
    form.resetFields()
  }, [props.updatedItem,form]);

  return (
    <div>
      <h2>{props.currentItem.bookName}</h2>
      <Form
      form={form}
      onFinish={changeUpdate}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
    >
      <Form.Item name="firstName" label="İsim" initialValue={props.currentItem.bookName}>
        <Input />
      </Form.Item>
      <Form.Item name="finishReadDate" label="Okunma Tarihi"
      initialValue={props.currentItem.finishReadDate&&moment(props.currentItem.finishReadDate, dateFormat)}  format={dateFormat}
      >
        <DatePicker  />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">Güncelle</Button>
        <Button  type="primary" danger onClick={cancelUpdate}>İptal</Button>
      </Form.Item>
    </Form>
    </div>
  )
}
