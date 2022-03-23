import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Table ,Form,DatePicker} from "antd";
import {
  getUserBooksAsync,
  userBookList,updateUserBookAsync
} from "../../../redux/reducers/userBookSlice";
export default function UserBooksReaded() {
  const [readDate, setReadDate] = useState("")
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
  const dateRead = (date,dateString)=>{
    setReadDate(dateString);
  }
 // console.log(currentItem);
  const setReadTime = (record)=>{
    const updateItem = {
      "id": record.id,
      "isRead": true,
      "finishReadDate": readDate
    }
    dispatch(updateUserBookAsync(updateItem))
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
        result.finishReadDate ?
        getDate(result.finishReadDate):
        (<Form.Item>
          <Button style={{marginLeft:"10-5%"}} type='primary' size='small' onClick={()=>setReadTime(result)}>Tarih Ekle</Button>
          <DatePicker style={{marginTop:"0.2em"}} onChange={dateRead} />
        </Form.Item>)
    },
    {
      title: "",
      render: (record) => 
      record.finishReadDate&&(<Form.Item>
        <Button style={{marginLeft:"10%"}} type='primary' size='small' onClick={()=>setReadTime(record)}>Güncelle</Button>
        <DatePicker style={{marginTop:"0.2em"}} onChange={dateRead} />
      </Form.Item>)
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
