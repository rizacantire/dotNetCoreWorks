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
      title: 'Kitap Adı',
      dataIndex: 'name',
    },
    {
      title: "My custom property one",
     render: (record) => record.firstName
    },
    {
      title: 'Yazar',
      dataIndex: "authorFirstName",
    },
    {
      title:"Yazar Soyad",
      dataIndex:["authorFirstName"]
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
      <Table columns={columns} dataSource={getList} size="middle" />
      <Table dataSource={getList}>
      
    </Table>
    </div>
  )
}
