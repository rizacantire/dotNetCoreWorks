import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBooksAsync,
  userBookList,
} from "../../../redux/reducers/userBookSlice";
export default function UserBookList() {
  const getDate =(date)=>{
    var dateObj = new Date(date);
    var month = dateObj.getMonth()+1;
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
    return returnDate
  }
  const dispatch = useDispatch();
  const getList = useSelector(userBookList);
  console.log(getList);
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
        render:(result)=>(result.finishReadDate===null?"":getDate(result)),
        dataIndex:"finishReadDate",
      },
    {
      title: "",
      render: (record) =>
        record.isRead ? (
          ""
        ) : (
          <Button type="primary" size="small">
            Okundu Yap
          </Button>
        ),
    },
  ];

  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch]);

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={getList} size="middle" />
    </div>
  );
}
