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
        birthDate: message.birthDate,
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
      <Col span={12}><Table columns={columns} dataSource={getData}  /></Col>
      <Col span={12}><AuthorAdd/></Col>
    </Row>
        
        
        
    </div>
  )
}
