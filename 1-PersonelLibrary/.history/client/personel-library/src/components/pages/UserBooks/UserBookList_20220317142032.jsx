import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBooksAsync,
  userBookList,
} from "../../../redux/reducers/userBookSlice";
export default function UserBookList() {
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
      render: (record) => record.authorFirstName + " " + record.authorLastName,
    },
    {
      title: "Sayfa",
      dataIndex: ["bookAuthorFirstName","bookAuthorLastName"],
    },
    {
      title: "Kategori",
      dataIndex: "bookCategoryName",
    },
    {
        title: "Durum",
        dataIndex: "isRead",
      },
  ];

  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch]);

  return (
    <div>
           <Table rowKey='id' columns={columns} dataSource={getList} size="middle" />

    </div>
  );
}
