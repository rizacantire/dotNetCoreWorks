import React, { useEffect } from 'react'
import { Row, Col, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)
    
    useEffect(() => {
        dispatch(getAuthorsAsync())
    }, [dispatch])
    const getData = authorListData.map((message) => ({
        fullName:message.firstName+" "+message.lastName,
        birthDate: new Date(message.birthDate).getMilliseconds,
      }));

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
      <Col  sm={24} md={10} lg={12} xl={14}><Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={14} lg={12} xl={10}><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
