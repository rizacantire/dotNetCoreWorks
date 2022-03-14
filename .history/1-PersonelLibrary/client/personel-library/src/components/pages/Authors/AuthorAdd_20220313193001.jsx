import React, {  useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import {  useDispatch } from "react-redux";
import {addAuthorAsync} from "../../../redux/reducers/authorSlice"

export default function AuthorAdd() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

  const handleSubmit  = async(values) => {
    console.log("Success:", values);
    if(window.confirm("Ekleme gerçekleştirilsin mi?")){
        await dispatch(addAuthorAsync(values));
        setFirstName("")
        setLastName("")
        values="";
    }   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{margin:"auto"}}>
      <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={handleSubmit }
        onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item value={firstName} label="Adı" name="firstName" rules={[{required: true,message: "Lütfen Yazar Adını Girin!",},]} >
          <Input />
        </Form.Item>

        <Form.Item value={lastName} label="Soyad" name="lastName" rules={[{required: true,message: "Lütfen Yazar'ın soyadını girin!",},]}>
          <Input />
        </Form.Item>
        <Form.Item name="birthDate" label="Doğum Tarihi">
        <DatePicker />
      </Form.Item>
        <Form.Item  wrapperCol={{offset: 8,span: 16,}}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
