import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  categoryList, getCategoriesAsync } from '../../../redux/reducers/categorySlice';
import { Row, Col, Table,Button } from 'antd';
import CategoryAdd from './CategoryAdd';
import ButtonGroup from 'antd/lib/button/button-group';

export default function CategoryList() {
    const dispatch = useDispatch()
    const getData = useSelector(categoryList)
    const deleteItem = (id)=>{
      console.log(id);
      //dispatch(deleteAuthorAsync(id))
    }

    const updateItem = (id)=>{
      console.log(id);
      //dispatch(deleteAuthorAsync(id))
    }
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: 'Name',
        dataIndex: "name",
      },
      {
        title:"",
        configureItem:(<ButtonGroup>
          <Button size="small" type="primary" danger onClick={(e)=>{deleteItem(e)}}>Sil</Button><Button size="small" type="primary" onClick={(e)=>{updateItem(e)}}>Update</Button>
        </ButtonGroup>)
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
