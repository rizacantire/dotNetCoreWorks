import { Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {userBookList} from "../../../redux/reducers/userBookSlice"
export default function UserBookList() {
    const dispatch = useDispatch()
    const getList = useSelector(userBookList)
    const columns = [
        {
          title: 'Kitap Adı',
          dataIndex: 'name',
        },
        {
          title: 'Yazar',
          render: (record) => record.authorFirstName+" "+record.authorLastName
        },
        {
          title:"Sayfa",
          dataIndex:"page"
        },
        {
          title:"Kategori",
          dataIndex:"categoryName"
        }]
  return (
    <div>
        
 <Table rowKey='id' columns={columns} dataSource={getList} size="middle" />
    </div>
  )
}
