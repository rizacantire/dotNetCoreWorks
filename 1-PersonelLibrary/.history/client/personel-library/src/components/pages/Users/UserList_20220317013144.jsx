import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsersAsync} from "../../../redux/reducers/userSlice" 
import { Table, Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';

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
    },
    {
      title:"Role",
      dataIndex:"roles"
    },
    {
      title:"",
      render:(<ButtonGroup>
        <Button size="small" type="primary" danger onClick={()=>{console.log("item")}}>Sil</Button><Button size="small" type="primary" onClick={()=>{console.log("a")}}>Update</Button>
      </ButtonGroup>)
    }
  ];

  console.log(getList);
  useEffect(() => {
    dispatch(getUsersAsync())
   
  }, [dispatch])
  
  return (
    <div>
        <Table  rowKey='id' columns={columns} dataSource={getList} size="middle" />
    </div>
  )
}
