import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authList,getAuthsAsync } from '../../../redux/reducers/authorsSlice';
import { Row, Col, Table } from 'antd';
import AuthorAdd from './AuthorAdd';
export default function Authors() {
    const dispatch = useDispatch()
    const getData = useSelector(authList)
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
      dispatch(getAuthsAsync())
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
