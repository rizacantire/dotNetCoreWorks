import React, { useEffect } from 'react'
import { Row, Col, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const getList = useSelector(authorList)
    
    
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getMonth()+1; //months from 1-12
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      return returnDate
    }
    const getData = getList.map((message) => ({
      key:message.id,
      fullName:message.firstName+" "+message.lastName,
      birthDate: getBirthDate(message.birthDate)
     
    }));
    const items = [...getData].sort((a, b) => b.id - a.id);

    

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
        }
      ];

    
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={items} size="middle" /></Col>
      <Col  sm={24} md={12} ><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
