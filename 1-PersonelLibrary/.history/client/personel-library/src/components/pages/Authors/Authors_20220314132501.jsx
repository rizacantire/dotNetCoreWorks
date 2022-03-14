import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Row, Col, Table } from 'antd';
import { authorList,getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';
export default function Authors() {
    const dispatch = useDispatch()
    const getData = useSelector(authorList)
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: 'Name',
        dataIndex: "firstName",
      }
    ];
    useEffect(()=>{
      dispatch(getAuthorsAsync())
    },[dispatch])
  return (
    <div>
         <Row>
      <Col  sm={24} md={12}> <Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12}> <AuthorAdd/></Col>
      </Row>    
    </div>
  )
}
