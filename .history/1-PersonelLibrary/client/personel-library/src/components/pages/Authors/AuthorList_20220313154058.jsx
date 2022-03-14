import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import axios from 'axios';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)
    const response =axios.get("https://localhost:5001/api/Author");
    await console.log(response);
    useEffect(() => {
        dispatch(getAuthorsAsync())
      
    }, [dispatch])
    // const getData1 = receivingMessages.map((message) => ({
    //     senderEmail: message.senderEmail,
    //     receiverEmail: message.receiverEmail,
    //     title: message.title,
    //     content: message.content,
    //     isRead: message.isRead === true ? "Okundu" : "Okunmadı",
    //   }));
    const columns = [
        {
          title: 'Name',
          dataIndex: 'firstName',
        },
        {
          title: 'Age',
          dataIndex: 'lastName',
        },
        {
          title: 'Address',
          dataIndex: "birthDate",
        },
      ];
      const data = [authorListData];
      console.log(authorListData);
    
  return (
    <div>
        <Table columns={columns} dataSource={data} size="middle" />
        
    </div>
  )
}
