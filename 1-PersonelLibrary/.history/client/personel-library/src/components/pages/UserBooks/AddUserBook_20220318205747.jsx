import { Button, Form, Select, Input, Checkbox, DatePicker } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
import { bookList, getBooksAsync } from "../../../redux/reducers/bookSlice";
import {addUserBookAsync} from "../../../redux/reducers/userBookSlice"
export default function AddUserBook() {
  const getBookList = useSelector(bookList);
  const { Option } = Select;

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
      const book = {
          ...values,
          'startReadDate': values['startReadDate']&&values['startReadDate'].format('YYYY-MM-DD'),
          'finishReadDate': values['finishReadDate']&&values['finishReadDate'].format('YYYY-MM-DD'),

      }
    let result = await dispatch(addUserBookAsync(book))
    result.error?denied():successed()
  };
  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <div>
      <Form layout="horizonal" form={form} onFinish={handleSubmit}>
        <Form.Item
          style={{ width: "100%" }}
          rules={[{ required: true }]}
          name="bookId"
          label="Kitap"
        >
          <Select
         
            showSearch
            placeholder="Kitap Seçin"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toString()
                .toLowerCase()
                .indexOf(input.toString().toLowerCase()) >= 0 ||
              option.props.value.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0
            }
          >
            {getBookList.map((book) => (
              <Option key={book.id} value={book.id}>
                {book.name}{" "}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item 
         labelCol={{ span: 16 }}
         wrapperCol={{ span: 12 }}
         style={{margin:"auto",display: "flex", marginLeft:"20%"
        }}
         >
        <Form.Item label="Okundu mu?"  style={{
            display: "inline-block",
            width: "calc(33% - 12px)",
          }} name="isRead" valuePropName="checked">
          <Checkbox style={{marginLeft:"30px"}}/>
        </Form.Item>
        <Form.Item
        label=" Başlangıç Tarihi"
          style={{
            display: "inline-block",
            width: "calc(33% - 12px)",
          }}
          name="startReadDate"
        >
          <DatePicker />
        </Form.Item>
        <span
          style={{
            display: "inline-block",
            width: "24px",
            lineHeight: "32px",
            textAlign: "center",
          }}
        >
        </span>
        <Form.Item label=" Bitiş Tarihi"
          style={{
            display: "inline-block",
            width: "calc(33% - 12px)",
          }}
          name="finishReadDate"
        >
          <DatePicker />
        </Form.Item>
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
