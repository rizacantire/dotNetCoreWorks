import React, { useEffect } from 'react'
import { Row, Col, Table, Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync,deleteAuthorAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const getList = useSelector(authorList)
    const deleteItem = (id)=>{
      console.log(id);
      dispatch(deleteAuthorAsync(id))
    }

    const updateItem = (id)=>{
      console.log(id);
      dispatch(deleteAuthorAsync(id))
    }
    
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getMonth()+1;
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      return returnDate
    }
    const getData = getList.map((message) => ({
      key:message.id,
      fullName:message.firstName+" "+message.lastName,
      birthDate: getBirthDate(message.birthDate),
      deleteItem:<Button size="small" type="primary" danger onClick={()=>{deleteItem(message.id)}}>Sil</Button>,
      updateItem:<Button size="small" type="primary" onClick={()=>{updateItem(message.id)}}>Update</Button>
     
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
          dataIndex:"deleteItem"
        }
      ];

    
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12} ><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
