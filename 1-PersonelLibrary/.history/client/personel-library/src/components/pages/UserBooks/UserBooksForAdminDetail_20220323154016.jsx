import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserBooksByUserIdAsync, userBooksByUserId } from '../../../redux/reducers/userBookSlice';
import { Button, Table } from 'antd';

export default function UserBooksForAdminDetail() {
  const dispatch = useDispatch()
  const getList = useSelector(userBooksByUserId)
  const userBooks = getList.userBooks;
  const user = getList.user
  const {id} = useParams();
  console.log(getList);
  const columns = [
    {
      title: "Kitap Adı",
      dataIndex: "bookName",
    },
    {
      title: "Kitap Adı",
      render:(record)=> record.bookAuthorFirstName +" "+ record.bookAuthorLastName
    },
    {
      title: "Kitap Adı",
      dataIndex: "bookName",
    },
    {
      title: "Sayfa",
      dataIndex: "bookPage",
    },
    {
      title: "Kategori",
      dataIndex: "bookCategoryName",
    },
    {
      title: "Durum",
      render: (record) => (record.isRead ? "Okundu" : "Okunmadı"),
    }
  ]
 
  useEffect(() => {
    dispatch(getUserBooksByUserIdAsync(id))
  }, [dispatch,id])
  
  return (
    <div>
        {/* <h2 style={{textAlign:"center"}}>{user.firstName}  {user.lastName}</h2> */}
        {user&&<h2 style={{textAlign:"center"}}>{user.firstName}  {user.lastName}</h2>}
        <Table rowKey="id" columns={columns} dataSource={userBooks} size="small"></Table>
    </div>
  )
}
