import { Button, Form, Select,Input, Checkbox ,DatePicker} from 'antd'
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
        layout="horizonal" 
        form={form}
        onFinish={handleSubmit}       
      >
        
        <Form.Item style={{width:"100%"}} rules={[{ required: true }]} name="bookId" label="Kitap">
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
       
        <Form.Item
      label="Okundu mu"
      style={{
        marginBottom: 0,
      }}
    >
         <Form.Item
        name="isRead"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
       
        style={{
          display: 'inline-block',
          width: 'calc(33% - 12px)',
        }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{
          display: 'inline-block',
          width: '24px',
          lineHeight: '32px',
          textAlign: 'center',
        }}
      >
        -
      </span>
      <Form.Item
        style={{
          display: 'inline-block',
          width: 'calc(33% - 12px)',
        }}
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
  )
}
