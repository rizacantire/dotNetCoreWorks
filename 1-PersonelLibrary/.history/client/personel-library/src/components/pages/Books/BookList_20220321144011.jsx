import React ,{useEffect} from 'react'
import { Button, Table,Form } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync,deleteBookAsync } from '../../../redux/reducers/bookSlice';
import { denied, successed } from '../../../redux/helpers/messageHelper';

export default function BookList() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)

  const deleteItem = async(id)=>{
    const result = await dispatch(deleteBookAsync(id))
    result.error?denied():successed()
    
  }


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
        <Button onClick={()=>deleteItem(record.id)} size="small" type='primary'>Sil</Button>
        <Button size="small" type='danger'>Düzenle</Button>
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
