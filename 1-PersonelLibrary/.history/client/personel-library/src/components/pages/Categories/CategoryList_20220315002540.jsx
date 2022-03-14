import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  categoryList, getCategoriesAsync,deleteCategoryAsync } from '../../../redux/reducers/categorySlice';
import { Row, Col, Table,Button } from 'antd';
import CategoryAdd from './CategoryAdd';
import ButtonGroup from 'antd/lib/button/button-group';

export default function CategoryList() {

    const dispatch = useDispatch()
    const getList = useSelector(categoryList)
    const isUpdate = useSelector((state)=>state.categories.isActiveForUpdate)
    const deleteItem = (id)=>{
     
      dispatch(deleteCategoryAsync(id))
    }

    const updateItem = (id)=>{
      isUpdate = true;
      console.log(id);
      console.log(isUpdate);
      //dispatch(deleteAuthorAsync(id))
    }
    const getData = getList.map((item) => ({
      key:item.id,
      id:item.id,
      name:item.name,
      configureItem:(<ButtonGroup>
        <Button size="small" type="primary" danger onClick={()=>{deleteItem(item.id)}}>Sil</Button><Button size="small" type="primary" onClick={()=>{updateItem(item.id)}}>Update</Button>
      </ButtonGroup>)
     
    }));
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
        dataIndex:"configureItem"
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
