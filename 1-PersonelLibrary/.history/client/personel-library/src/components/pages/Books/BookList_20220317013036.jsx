import React ,{useEffect} from 'react'
import { Table,Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../redux/reducers/bookSlice';
import ButtonGroup from 'antd/lib/button/button-group';

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
      render:(<ButtonGroup>
        <Button size="small" type="primary" danger onClick={()=>{console.log("item")}}>Sil</Button><Button size="small" type="primary" onClick={()=>{console.log("a")}}>Update</Button>
      </ButtonGroup>)
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
