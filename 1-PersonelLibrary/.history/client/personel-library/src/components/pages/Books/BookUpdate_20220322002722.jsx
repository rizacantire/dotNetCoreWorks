import { Form,Button,Input,Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { denied, successed } from '../../../redux/helpers/messageHelper';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import { getBooksAsync, updateBookAsync } from '../../../redux/reducers/bookSlice';
import { categoryList, getCategoriesAsync } from '../../../redux/reducers/categorySlice';

export default function BookUpdate({currentBook}) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const getAuthorList = useSelector(authorList)
  const getCategoryList = useSelector(categoryList)
  const dispatch = useDispatch()
  const updateBook = async(e)=>{
    const sentItem = {...e,id:currentBook.id}
   
    const result =await dispatch(updateBookAsync(sentItem))
     //dispatch(await getBooksAsync())

    result.error?denied():successed()

  }
  useEffect(() => {
    dispatch(getAuthorsAsync())
    dispatch(getCategoriesAsync())
    form.resetFields()
  }, [dispatch,form,currentBook])
  
  return (
    <div >
      <Form    form={form} name="update_book" layout="inline"
      onFinish={updateBook}
       >
      <Form.Item 
        name="name"
        initialValue={currentBook.name}
      >
        <Input  placeholder="name" />
      </Form.Item>
      
      <Form.Item name="authorId" initialValue={currentBook.authorId}
>
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
        <Form.Item
        name="page"
        initialValue={currentBook.page}
        style={{width:"6em"}}
      >
        <Input
        
          type="number"
          placeholder="page"
        />
      </Form.Item>
        <Form.Item 
        initialValue={currentBook.categoryId}
        name="categoryId">
          <Select
            showSearch
            placeholder="Kategori"
            optionFilterProp="children"
            filterOption={(input, option) =>  
              option.children.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0 
              || option.value.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0
            }
          >
            {getCategoryList.map(category=>(
               <Option key={category.id} value={category.id}>{category.name} </Option>
            ))}
           
            
          </Select>
        </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
          size='small'
            type="primary"
            htmlType="submit"
          >
            Güncelle
          </Button>
        )}
      </Form.Item>
    </Form>
    </div>
  )
}
