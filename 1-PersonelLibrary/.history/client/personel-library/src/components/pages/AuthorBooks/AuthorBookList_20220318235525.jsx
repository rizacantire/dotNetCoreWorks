import React,{useEffect, useState} from "react";
import { Select,Form,Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authorList, getAuthorsAsync} from '../../../redux/reducers/authorSlice';
import { authorBookList,getBooksByAuthorAsync  } from "../../../redux/reducers/bookSlice";

export default function AuthorBookList() {
  const [currentAuthor, setCurrentAuthor] = useState("")
  const getAuthorList = useSelector(authorList)
  const getAuthorBookList = useSelector(authorBookList)
  const dispatch = useDispatch()
  const selectedAuthor =(e)=>{
    dispatch(getBooksByAuthorAsync(e))
    console.log(currentAuthor);
  }
  const { Option } = Select;

  const columns = [
    {
      title: 'Kitap Adı',
      dataIndex: 'name',
    },
    {
      title: 'Yazar',
      render: () => currentAuthor
    },
    {
      title:"Sayfa",
      dataIndex:"page"
    },
    {
      title:"Kategori",
      dataIndex:"categoryName"
    }
  ];
  useEffect(() => {
    dispatch(getAuthorsAsync())
  }, [dispatch])
  
  return (
    <div style={{marginTop:"10px"}}>
     <Form style={{width:"35%",marginLeft:"20em"}}>
     <Form.Item  name="authorId" label="Yazar">
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
               <Option onSelect={()=>setCurrentAuthor(author.firstName+" "+author.lastName)} key={author.id} value={author.id}>{author.firstName} {author.lastName}</Option>
            ))}
           
            
          </Select>
        </Form.Item>
     </Form>
     <Table rowKey='id' columns={columns} dataSource={getAuthorBookList} size="middle" />

    </div>
  );
}
