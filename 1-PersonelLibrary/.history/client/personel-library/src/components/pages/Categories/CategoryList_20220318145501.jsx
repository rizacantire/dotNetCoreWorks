import React , {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  categoryList, getCategoriesAsync,deleteCategoryAsync } from '../../../redux/reducers/categorySlice';
import { Row, Col, Table,Button,message } from 'antd';
import CategoryAdd from './CategoryAdd';
import ButtonGroup from 'antd/lib/button/button-group';
import CategoryUpdate from './CategoryUpdate';
import {successed,denied} from "../../../redux/helpers/messageHelper"

export default function CategoryList() {
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateItemName, setUpdateItemName] = useState("")
    const dispatch = useDispatch()
    const getList = useSelector(categoryList)
    

    const deleteItem = async(id)=>{
      let result = await dispatch(deleteCategoryAsync(id))
      result.error?denied():successed()
    
    }

    const updateItem = async(item)=>{
      setIsUpdate(true);
      setUpdateItemName(item)
      
    }
    const getData = getList.map((item) => ({
      key:item.id,
      id:item.id,
      name:item.name,
      configureItem:(<ButtonGroup>
        <Button size="small" type="primary" danger onClick={()=>{deleteItem(item.id)}}>Sil</Button><Button size="small" type="primary" onClick={()=>{updateItem(item)}}>Update</Button>
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
      <Col  sm={24} md={12}>
      {isUpdate?<CategoryUpdate isUpdate={isUpdate} setIsUpdate={setIsUpdate} updateItemName={updateItemName} setUpdateItemName={setUpdateItemName} />:<CategoryAdd/>}
         
         </Col>

      </Row>
        
    </div>
  )
}
