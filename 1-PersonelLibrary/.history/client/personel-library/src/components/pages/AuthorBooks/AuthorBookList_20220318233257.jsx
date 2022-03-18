import React,{useEffect} from "react";
import { Select,Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';

export default function AuthorBookList() {
  const getAuthorList = useSelector(authorList)
  const dispatch = useDispatch()

  const selectedAuthor =(e)=>{
    console.log(e);
  }
  const { Option } = Select;
  console.log(getAuthorList);
  useEffect(() => {
    dispatch(getAuthorsAsync())
  }, [dispatch])
  
  return (
    <div style={{marginTop:"10px"}}>
     <Form>
     <Form.Item rules={[{ required: true }]} name="authorId" label="Yazar">
          <Select
          onSelect={selectedAuthor}
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
     </Form>
    </div>
  );
}
