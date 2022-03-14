import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { addAuthAsync } from "../../../redux/reducers/authorsSlice";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/lib/locale/zh_CN";

export default function AuthorAdd() {

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    //e.preventDefault()
    let commentator = { firstName: firstName, lastName: lastName };
    if (window.confirm("Ekleme gerçekleştirilsin mi?")) {
      await dispatch(addAuthAsync(commentator));
      setFirstName("");
      setLastName("");
    }
  };
  
  
  return (
    <div style={{ margin: "auto" }}>
      <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
    >
      <Form.Item label="İsim">
        <Input />
      </Form.Item>

      <Form.Item label="Soyisim">
        <Input />
      </Form.Item>
      
      
      <Form.Item label="Doğum Tarihi">
        <DatePicker />
      </Form.Item>
      
      
      <Form.Item label=" ">
        <Button>Ekle</Button>
      </Form.Item>
    </Form>
    </div>
  );
}
