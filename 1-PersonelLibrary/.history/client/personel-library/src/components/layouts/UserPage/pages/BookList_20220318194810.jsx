import React ,{useEffect} from 'react'
import { Button, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../../redux/reducers/bookSlice';
import {addUserBookAsync, getUserBooksAsync,userBookList} from  "../../../../redux/reducers/userBookSlice";
import { successed ,denied} from '../../../../redux/helpers/messageHelper';
export default function BookList() {
    
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)
  const getUserBookList = useSelector(userBookList);
  const addLibrary = async(event)=>{
   console.log(event);
   let result = await dispatch(addUserBookAsync(event));
   result.error?denied():successed()
}

  const getAddButton = (record)=>{
    let result = getUserBookList.filter((e)=>e.bookId===record.id);
    return result.length>0?"":<Button onClick={()=>addLibrary(record)} size="small" type='primary'>Kitaplığma Ekle</Button>
  }

 
  const columns = [
    {
      title: 'Kitap Adı',
      dataIndex: 'name',
    },
    {
      title: 'Yazar',
      render: (record) => record.authorFirstName+" "+record.authorLastName
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
    dispatch(getBooksAsync())
    dispatch(getUserBooksAsync())
}, [dispatch])


  return (
    <div>
      <Table rowKey='id' columns={columns} dataSource={getBookList} size="middle" />
    </div>
  )
}
