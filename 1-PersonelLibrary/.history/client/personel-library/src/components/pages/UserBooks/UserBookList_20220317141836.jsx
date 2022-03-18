import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBooksAsync,
  userBookList,
} from "../../../redux/reducers/userBookSlice";
export default function UserBookList() {
  const dispatch = useDispatch();
  const getList = useSelector(userBookList).result;
  console.log(getList);
  const columns = [
    {
      title: "Kitap Adı",
      dataIndex: "name",
    },
    {
      title: "Yazar",
      render: (record) => record.authorFirstName + " " + record.authorLastName,
    },
    {
      title: "Sayfa",
      dataIndex: "page",
    },
    {
      title: "Kategori",
      dataIndex: "categoryName",
    },
  ];

  useEffect(() => {
    dispatch(getUserBooksAsync());
  }, [dispatch]);

  return (
    <div>
     
    </div>
  );
}
