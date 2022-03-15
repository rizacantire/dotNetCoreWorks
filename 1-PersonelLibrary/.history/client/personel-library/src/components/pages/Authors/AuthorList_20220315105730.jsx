import React, { useEffect,useState } from 'react'
import { Row, Col, Table, Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync,deleteAuthorAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';
import ButtonGroup from 'antd/lib/button/button-group';
import AuthorUpdate from './AuthorUpdate';

export default  function AuthorList() {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedItem, setUpdatedItem] = useState("")
    const dispatch = useDispatch()
    const getList = useSelector(authorList)
    const deleteItem = (id)=>{
      console.log(id);
      dispatch(deleteAuthorAsync(id))
    }

    const updateItem = (item)=>{
      console.log(item);
      setIsUpdate(true);
      setUpdatedItem(item)
      //dispatch(deleteAuthorAsync(id))
    }
    
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getMonth()+1;
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      return returnDate
    }
    const getData = getList.map((item) => ({
      key:item.id,
      fullName:item.firstName+" "+item.lastName,
      birthDate: getBirthDate(item.birthDate),
      configureItem:(<ButtonGroup>
        <Button size="small" type="primary" danger onClick={()=>{deleteItem(item.id)}}>Sil</Button><Button size="small" type="primary" onClick={()=>{updateItem(item)}}>Update</Button>
      </ButtonGroup>)
     
    }));
   

    useEffect(() => {
        dispatch(getAuthorsAsync())
    }, [dispatch])
    
    const columns = [
        {
          title: 'Yazar',
          dataIndex: 'fullName',
        },
        {
          title: 'Doğum Tarihi',
          dataIndex: "birthDate",
        },
        {
          title:"",
          dataIndex:"configureItem"
        }
      ];

    
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12} >
      {isUpdate?<AuthorUpdate isUpdate={isUpdate} setIsUpdate={setIsUpdate} updateItemName={updatedItem} setUpdateItemName={setUpdatedItem} />: <AuthorAdd/>}
       
        </Col>
    </Row>
        
        
        
    </div>
  )
}
