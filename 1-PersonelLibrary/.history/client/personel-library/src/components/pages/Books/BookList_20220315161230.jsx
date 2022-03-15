import React ,{useEffect} from 'react'
import { Row, Col, Table, Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../redux/reducers/bookSlice';
export default function BookList() {
  const dispatch = useDispatch()
  const getList = useSelector(bookList)
  console.log(getList);
  const columns = [
    {
      title: 'Yazar',
      dataIndex: 'fullName',
    },
    {
      title: 'Doğum Tarihi',
      dataIndex: "birthDate",
    },
    {
      title:"",
      dataIndex:"configureItem"
    }
  ];

  useEffect(() => {
    dispatch(getBooksAsync())
}, [dispatch])


  return (
    <div>
      <Table columns={columns} dataSource={getList} size="middle" />
    </div>
  )
}
