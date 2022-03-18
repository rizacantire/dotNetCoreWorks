import React,{useEffect} from "react";
import { Select,Form,Table,Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authorList, getAuthorsAsync} from '../../../redux/reducers/authorSlice';
import { authorBookList,getBooksByAuthorAsync  } from "../../../redux/reducers/bookSlice";
import { addUserBookAsync, getUserBooksAsync, userBookList } from "../../../redux/reducers/userBookSlice";
import { denied, successed } from "../../../redux/helpers/messageHelper";

export default function AuthorBookList() {
  const getAuthorList = useSelector(authorList)
  const getAuthorBookList = useSelector(authorBookList)
  const getUserBookList = useSelector(userBookList);
  console.log("render");
  const addLibrary = async(event)=>{
    const userBook= {bookId:event.id}
    let result = await dispatch(addUserBookAsync(userBook));
    result.error?denied():successed()
 }
  const getAddButton = (record)=>{
    let result = getUserBookList.filter((e)=>e.bookId===record.id);
    return result.length>0?"":<Button onClick={()=>addLibrary(record)} size="small" type='primary'>Kitaplığıma Ekle</Button>
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
      title:"",
      render:(record)=>(getAddButton(record))
  }
  ];
  useEffect(() => {
    dispatch(getAuthorsAsync())
    dispatch(getUserBooksAsync())
  }, [dispatch,getUserBookList])
  
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
