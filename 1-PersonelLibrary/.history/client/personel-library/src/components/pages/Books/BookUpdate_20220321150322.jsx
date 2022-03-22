import { Form,Button,Input,Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import { categoryList, getCategoriesAsync } from '../../../redux/reducers/categorySlice';

export default function BookUpdate({currentBook}) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const getAuthorList = useSelector(authorList)
  const getCategoryList = useSelector(categoryList)
  console.log(currentBook);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthorsAsync())
    dispatch(getCategoriesAsync())
    form.resetFields()
  }, [dispatch,form,currentBook])
  
  return (
    <div style={{margin:"auto",display:"flex"}}>
      <Form style={{width:"99%"}}  form={form} name="update_book" layout="inline" >
      <Form.Item
        name="Kitap Adı"
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
