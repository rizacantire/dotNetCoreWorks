import { Form,Button,Input,Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import { categoryList, getCategoriesAsync } from '../../../redux/reducers/categorySlice';

export default function BookUpdate() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const getAuthorList = useSelector(authorList)
  const getCategoryList = useSelector(categoryList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthorsAsync())
    dispatch(getCategoriesAsync())
  }, [dispatch])
  
  return (
    <div>
      <Form form={form} name="horizontal_login" layout="inline" >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
         
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} name="authorId">
          <Select
            showSearch
            placeholder="Yazar Seçin"
            optionFilterProp="children"
            filterOption={(input, option) =>  
              option.children.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0 
              || option.value.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0
            }
          >
            {getAuthorList.map(author=>(
               <Option key={author.id} value={author.id}>{author.firstName} {author.lastName}</Option>
            ))}
           
            
          </Select>
        </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
    </div>
  )
}
