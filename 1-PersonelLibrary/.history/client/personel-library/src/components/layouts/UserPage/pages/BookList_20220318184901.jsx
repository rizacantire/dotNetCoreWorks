import React ,{useEffect} from 'react'
import { Button, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../../redux/reducers/bookSlice';
import {getUserBooksAsync,userBookList,} from  "../../../../redux/reducers/userBookSlice";
export default function BookList() {
 
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)
  const getUserBookList = useSelector(userBookList);
  console.log(getUserBookList);

  const addLibrary = (event)=>{
    console.log(event);
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
        render:(event)=>(<Button onClick={()=>addLibrary(event)} type="primary" size='small'>Kitaplığıma Ekle</Button>)
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
