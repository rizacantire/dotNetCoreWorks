import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserBooksByUserIdAsync, userBooksByUserId } from '../../../redux/reducers/userBookSlice';
import { Button, Table } from 'antd';

export default function UserBooksForAdminDetail() {
  const dispatch = useDispatch()
  const getList = useSelector(userBooksByUserId)
  const {id} = useParams();
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
  console.log("render");
  const getir = ()=>{
    dispatch(getUserBooksByUserIdAsync(id))
  }
  useEffect(() => {
    dispatch(getUserBooksByUserIdAsync(id))
  }, [dispatch,id])
  
  return (
    <div>
        tetaytedatasdf
      <Button onClick={getir}>Getir</Button>
        {id}
        <Table rowKey="id" columns={columns} dataSource={getList} size="small"></Table>
    </div>
  )
}
