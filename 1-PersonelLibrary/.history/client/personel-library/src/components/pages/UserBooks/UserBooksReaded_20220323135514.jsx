import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import {
  getUserBooksAsync,
  userBookList,updateUserBookAsync
} from "../../../redux/reducers/userBookSlice";
export default function UserBooksReaded() {
  const dispatch = useDispatch();
  const getList = useSelector(userBookList);
  const getDate = (date) => {
    var dateObj = new Date(date);
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var returnDate =
      day.toString() + "-" + month.toString() + "-" + year.toString();
    return returnDate;
  };
  const setReadTime = (record)=>{
    const updateItem = {
      "id": record.id,
      "finishReadDate": "2022-03-22"
    }
    //dispatch(updateUserBookAsync(updateItem))
    console.log(updateItem);
  }
  const returnList = getList.filter(book=>book.isRead===true)
  const columns = [
    {
      title: "Kitap Adı",
      dataIndex: "bookName",
    },
    {
      title: "Yazar",
      render: (record) =>
        record.bookAuthorFirstName + " " + record.bookAuthorLastName,
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
    },
    {
      title: "Bitirme Tarihi",
      render: (result) =>
        result.finishReadDate ? getDate(result.finishReadDate):
        <Button type='primary' size='small' onClick={()=>setReadTime(result)}>Tarih Ekle</Button>,
    },
  ];
  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch]);
  return (
    <div>
        <Table rowKey="id" columns={columns} dataSource={returnList} size="middle" />
    </div>
  )
}
