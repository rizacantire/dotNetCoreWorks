import React ,{useEffect} from 'react'
import { Button, Table } from 'antd';
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
    },
    {
      title:"",
      render : (record)=> <Button.Group>
        <Button size="small" type='primary'>Sil</Button>
        <Button size="small"  type='danger'>Düzenle</Button>
      </Button.Group>
    }
  ];

  useEffect(() => {
    dispatch(getBooksAsync())
}, [dispatch])


  return (
    <div>
      <Table rowKey='id' columns={columns} dataSource={getBookList} size="middle" />
    </div>
  )
}
