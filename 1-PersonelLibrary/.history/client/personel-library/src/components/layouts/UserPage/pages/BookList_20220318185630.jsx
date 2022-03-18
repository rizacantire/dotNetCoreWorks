import React ,{useEffect} from 'react'
import { Button, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../../redux/reducers/bookSlice';
import {getUserBooksAsync,userBookList,} from  "../../../../redux/reducers/userBookSlice";
export default function BookList() {
 
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)
  const getUserBookList = useSelector(userBookList);
  const addLibrary = (event)=>{
   
}
  const getAddButton = (event)=>{
      
    getUserBookList.find((e)=>{
        if(e.bookId!==event.id){
            console.log("var");
            return <Button onClick={()=>addLibrary(event)} type="primary" size='small'>Kitaplığıma Ekle</Button>
        }
        
    })
   
    return "boş"
  }
  console.log(getUserBookList);

 
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
