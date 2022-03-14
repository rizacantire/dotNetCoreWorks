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
    function click (){ let authorService = new AuthorService();
      let list = authorService.getData().then(res=>console.log(res))
      console.log(list)}
     
    
    useEffect(() => {
        dispatch(getAuthorsAsync())
        console.log(response);
        let authorService = new AuthorService();
        let list = authorService.getData()
        console.log(list)

    }, [dispatch])
    const getData = authorListData.map((message) => ({
      firstName: message.firstName,
        lastName: message.lastName,
        birthDate: message.birthDate,
      }));

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
        <Table columns={columns} dataSource={getData} size="middle" />
        <Button onClick={click}>Tik</Button>
        
    </div>
  )
}
