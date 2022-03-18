import { Button, Form, Select,Input, Checkbox } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookList, getBooksAsync } from '../../../redux/reducers/bookSlice'

export default function AddUserBook() {
    const getBookList = useSelector(bookList)
    const {Option} = Select

    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const handleSubmit= async(values)=>{
        console.log(values);
    }
    useEffect(() => {
        dispatch(getBooksAsync())
    }, [dispatch])
    
  return (
    <div>
        <Form
        layout="inline" 
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
       
      >
        
        <Form.Item rules={[{ required: true }]} name="bookId" label="Kitap">
          <Select
            showSearch
            placeholder="Kitap Seçin"
            optionFilterProp="children"
            filterOption={(input, option) =>  
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 
              || option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {getBookList.map(book=>(
               <Option key={book.id} value={book.id}>{book.name} </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Okundu mu">
            <Checkbox/>
        </Form.Item>
        <Input
        type="text"
       
        style={{ width: 100 }}
      />
      <Select
       
        style={{ width: 80, margin: '0 8px' }}
     
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
       

        <Form.Item style={{ marginLeft: "50%" }}>
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
