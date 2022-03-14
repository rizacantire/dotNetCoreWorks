import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  catList, getCatsAsync } from '../../../redux/reducers/catSlice';
import { Row, Col, Table } from 'antd';
import CategoryAdd from './CategoryAdd';

export default function CategoryList() {
    const dispatch = useDispatch()
    const getData = useSelector(catList)
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key:"id"
      },
      {
        title: 'Name',
        dataIndex: "name",
      }
    ];
    useEffect(()=>{
      dispatch(getCatsAsync())
    },[dispatch])
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}> <Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12}> <CategoryAdd/></Col>
      </Row>       
    </div>
  )
}
