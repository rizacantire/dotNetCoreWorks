import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsersAsync} from "../../../redux/reducers/userSlice" 
import { Row, Col, Table, Button } from 'antd';

export default function UserList() {
  
  const dispatch = useDispatch();
  const getList = useSelector((state)=>state.users.items);
  const columns = [
    {
      title: 'İsim',
      dataIndex: 'firstName',
    },
    {
      title: 'Soyisim',
      dataIndex: "lastName",
    },
    {
      title:"Mail",
      dataIndex:"email"
    }
  ];
  useEffect(() => {
    dispatch(getUsersAsync())
   
  }, [dispatch])
  
  return (
    <div>
        <Table columns={columns} dataSource={getList} size="middle" />
    </div>
  )
}
