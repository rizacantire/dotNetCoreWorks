import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
import {
  getUserBooksAsync,
  userBookList,
  updateUserBookAsync,
  deleteUserBookAsync
} from "../../../redux/reducers/userBookSlice";
export default function UserBookList() {
  const [whenChange, setWhenChange] = useState(false)

  const getDate = (date) => {
    var dateObj = new Date(date);
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var returnDate =
      day.toString() + "-" + month.toString() + "-" + year.toString();
    return returnDate;
  };
  const dispatch = useDispatch();
  const getList = useSelector(userBookList);

  const deleteUserBook = (userBook)=>{
    const deleteItem = { "id": userBook.id,
    "userId":""
    }
    await dispatch(deleteUserBookAsync(deleteItem))
    console.log(deleteItem);
  }

  const setIsRead = async (record) => {
    
    let updateData = {
      id: record.id,
      isRead: true,
    };
    let result = await dispatch(updateUserBookAsync(updateData));
    result.error ? denied() : successed();
    console.log(updateData);
    dispatch(getUserBooksAsync())
  };

  const setIsUnRead = async (record) => {
    
    let updateData = {
      id: record.id,
      isRead: false,
    };
    let result = await dispatch(updateUserBookAsync(updateData));
    result.error ? denied() : successed();
    console.log(updateData);
    dispatch(getUserBooksAsync())
  };
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
        result.finishReadDate && getDate(result.finishReadDate),
    },
    {
      title: "",
      render: (record) =>
        record.isRead ? (
          <Button onClick={() => {setIsUnRead(record)}} type="danger" size="small">
            Okundumadı Yap
          </Button>
        ) : (
          <Button onClick={() => {setIsRead(record)}} type="primary" size="small">
            Okundu Yap
          </Button>
        ),
    },
    {
      title:"",
      render: (record)=><Button onClick={()=>deleteUserBook(record)} type="danger" size="small">Sil</Button>
      
    }
  ];
  console.log("render");
  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch]);

  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={getList} size="middle" />
    </div>
  );
}
