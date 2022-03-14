import React from 'react'
import { Table } from 'antd';

export default function Dashboard() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: "adress"&"address1",
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      address1: 'New York No. 2 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      address1: 'New York No. 2 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      address1: 'New York No. 2 Lake Park',
    },
   
    
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}
