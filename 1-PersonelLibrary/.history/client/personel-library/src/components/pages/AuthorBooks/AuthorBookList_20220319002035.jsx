import React,{useEffect} from "react";
import { Select,Form,Table,Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authorList, getAuthorsAsync} from '../../../redux/reducers/authorSlice';
import { authorBookList,getBooksByAuthorAsync  } from "../../../redux/reducers/bookSlice";

export default function AuthorBookList() {
  const getAuthorList = useSelector(authorList)
  const getAuthorBookList = useSelector(authorBookList)
  const addMyBooks = (e)=>{
    console.log(e);
  }
  const dispatch = useDispatch()
  const selectedAuthor =(e)=>{
    dispatch(getBooksByAuthorAsync(e))
  }
  const { Option } = Select;

  const columns = [
    {
      title: 'Kitap Adı',
      dataIndex: 'name',
    },
    {
      title: 'Yazar',
      dataIndex:"fullName"
    },
    {
      title:"Sayfa",
      dataIndex:"page"
    },
    {
      title:"Kategori",
      dataIndex:"categoryName"
    },
    {
      title: "",
      render: (record) =>
        record.isRead ? (
          ""
        ) : (
          <Button onClick={() => {addMyBooks(record)}} type="primary" size="small">
            Okundu Yap
          </Button>
        ),
    },
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
               <Option key={author.id} value={author.id}>{author.firstName} {author.lastName}</Option>
            ))}
           
            
          </Select>
        </Form.Item>
     </Form>
     <Table rowKey='id' columns={columns} dataSource={getAuthorBookList} size="middle" />

    </div>
  );
}
