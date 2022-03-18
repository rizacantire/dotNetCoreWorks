import React ,{useEffect} from 'react'
import { Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { bookList, getBooksAsync } from '../../../redux/reducers/bookSlice';

export default function BookList() {
 
  const dispatch = useDispatch()
  const getBookList = useSelector(bookList)
  console.log(getBookList);
 
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
     
    </div>
  )
}
