import React, { useEffect } from 'react'
import { Row, Col, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)
   
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      return returnDate
    }
    const getList = useSelector(authorList)
    const getData = getList.map((message) => ({
      key:message.id,
      fullName:message.firstName+" "+message.lastName,
      birthDate: getBirthDate(message.birthDate)
     
    }));

    useEffect(() => {
        dispatch(getAuthorsAsync())
    }, [dispatch])
    
    const columns = [
        {
          title: 'Yazar',
          dataIndex: 'firstName',
        },
        {
          title: 'Doğum Tarihi',
          dataIndex: "birthDate",
        }
      ];

    
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getList} size="middle" /></Col>
      <Col  sm={24} md={12} ><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
