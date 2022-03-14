import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import axios from 'axios';
import AuthorService from './authorService';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)
    const response =axios.get("https://localhost:44345/api/Author");
    console.log(response);
    
    useEffect(() => {
        dispatch(getAuthorsAsync())
    }, [dispatch])
    const getData = authorListData.map((message) => ({
        fullName:message.firstName+" "+message.lastName,
        birthDate: message.birthDate,
      }));

    const columns = [
        {
          title: 'Yazar',
          dataIndex: 'fullName',
        },
        {
          title: 'Doğum Tarihi',
          dataIndex: "birthDate",
        }
      ];

    
  return (
    <div>
        <Table columns={columns} dataSource={getData} size="middle" />
        <Button >Tik</Button>
        
    </div>
  )
}
