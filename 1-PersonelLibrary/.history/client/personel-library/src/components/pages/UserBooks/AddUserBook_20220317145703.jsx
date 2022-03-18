import { Button, Form, Select,Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookList } from '../../../redux/reducers/bookSlice'

export default function AddUserBook() {
    const getBookList = useSelector(bookList)
    const {Option} = Select

    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const handleSubmit= async(values)=>{
        console.log(values);
    }
    useEffect(() => {
        dispatch(getBookList())
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
        
        <Form.Item rules={[{ required: true }]} name="authorId" label="Yazar">
          <Select
            showSearch
            placeholder="Yazar Seçin"
            optionFilterProp="children"
            filterOption={(input, option) =>  
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 
              || option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {getBookList.map(author=>(
               <Option key={author.id} value={author.id}>{author.firstName} {author.lastName}</Option>
            ))}
           
            
          </Select>
        </Form.Item>
       
       

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
