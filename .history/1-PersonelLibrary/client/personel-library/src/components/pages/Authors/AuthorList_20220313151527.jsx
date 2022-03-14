import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';

export default function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)

    useEffect(() => {
        dispatch(getAuthorsAsync)
      
    }, [dispatch])

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
          dataIndex: "adress"||"address1",
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          address1: 'New York No. 2 Lake Park',
        }
        
      ];
    

  return (
    <div>
        <Table columns={columns} dataSource={data} size="middle" />
        
    </div>
  )
}
