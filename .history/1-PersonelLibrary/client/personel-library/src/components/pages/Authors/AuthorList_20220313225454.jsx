import React, { useEffect,useCallback,useState } from 'react'
import { Row, Col, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const getList = useSelector(authorList)
    const [birthDate, setBirthDate] = useState("")

    const getBirthDate = useCallback((bb) => {
      var dateObj = new Date(bb);
      var month = dateObj.getUTCMonth() + 1; 
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      setBirthDate((t) => returnDate);
      return returnDate
    }, [birthDate]);
    
    // const getBirthDate =(birthDate)=>{
    //   var dateObj = new Date(birthDate);
    //   var month = dateObj.getUTCMonth() + 1; //months from 1-12
    //   var day = dateObj.getUTCDate();
    //   var year = dateObj.getUTCFullYear();
    //   var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
    //   return returnDate
    // }
    console.log(getBirthDate);
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
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12} ><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
