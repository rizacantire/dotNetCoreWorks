import React,{useEffect} from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsync } from "../../../redux/reducers/bookSlice";
import { authorList,getAuthorsAsync } from "../../../redux/reducers/authorSlice";

export default function BookAdd() {
  const getAuthorList = useSelector(authorList)

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  let book = {
    name: "string",
    page: 0,
    authorId: 0,
    categoryId: 0,
  };

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    // 
    console.log(values);
  };

  useEffect(() => {
    dispatch(getAuthorsAsync())
}, [dispatch])
  return (
    <div>
      <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item rules={[{ required: true }]} name="name" label="Kitap Adı">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="page"
          label="Sayfa Sayısı"
        >
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="authorId" label="Yazar">
          <Select
            showSearch
            placeholder="Yazar Seçin"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {getAuthorList.map(author=>(
               <Option key={author.id} value={author.id}>{author.firstName}</Option>
            ))}
           
            
          </Select>
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="categoryId"
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
