import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
import {
  getUserBooksAsync,
  userBookList,updateUserBookAsync
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

  const setIsRead =async (record)=>{
    let updateData = {
      id:record.id,
      isRead:true
    }
    let result = await dispatch(updateUserBookAsync(updateData))
    result.error?denied():successed()
    console.log(updateData);
  }
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
        render:(result)=>(result.finishReadDate&&getDate(result.finishReadDate))
      },
    {
      title: "",
      render: (record) =>
        record.isRead ? (
          ""
        ) : (
          <Button onClick={()=>{setIsRead(record)}} type="primary" size="small">
            Okundu Yap
          </Button>
        ),
    },
  ];

  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch,getList]);

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={getList} size="middle" />
    </div>
  );
}
