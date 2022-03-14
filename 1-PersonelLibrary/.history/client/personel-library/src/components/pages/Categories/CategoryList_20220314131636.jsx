import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addCatAsync, catList, getCatsAsync } from '../../../redux/reducers/catSlice';
import { Row, Col, Table } from 'antd';
import CategoryAdd from './CategoryAdd';

export default function CategoryList() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const getData = useSelector(catList)
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: 'Name',
        dataIndex: "name",
      }
    ];
    console.log(getData);
    const handeSubmit = (e)=>{
        e.preventDefault();
        let cat = {name:name}
        dispatch(addCatAsync(cat))
        
    }
    useEffect(()=>{
      dispatch(getCatsAsync())
    },[dispatch])
  return (
    <div>
      <Table columns={columns} dataSource={getData} size="middle" />
      <CategoryAdd/>
       
    </div>
  )
}
