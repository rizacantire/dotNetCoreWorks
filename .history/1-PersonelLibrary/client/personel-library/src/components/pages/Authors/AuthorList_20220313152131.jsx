import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';

export default function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)

    useEffect(() => {
        dispatch(getAuthorsAsync())
      
    }, [dispatch])

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
