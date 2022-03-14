import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  categoryList, getCategoriesAsync } from '../../../redux/reducers/categorySlice';
import { Row, Col, Table } from 'antd';
import CategoryAdd from './CategoryAdd';

export default function CategoryList() {
    const dispatch = useDispatch()
    const getData = useSelector(categoryList)
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
    useEffect(()=>{
      dispatch(getCategoriesAsync())
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
