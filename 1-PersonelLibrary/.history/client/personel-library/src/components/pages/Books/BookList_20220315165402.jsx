import React ,{useEffect} from 'react'
import { Row, Col, Table, Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../redux/reducers/bookSlice';
export default function BookList() {
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)
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
    }
  ];

  useEffect(() => {
    dispatch(getBooksAsync())
}, [dispatch])


  return (
    <div>
      <Table columns={columns} dataSource={getBookList} size="middle" />
    </div>
  )
}
