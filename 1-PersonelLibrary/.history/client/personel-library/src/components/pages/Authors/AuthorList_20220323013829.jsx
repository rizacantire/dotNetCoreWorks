import React, { useEffect,useState } from 'react'
import { Row, Col, Table, Button ,Form,Input} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync,deleteAuthorAsync,exportAuthorAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';
import ButtonGroup from 'antd/lib/button/button-group';
import AuthorUpdate from './AuthorUpdate';
import {successed,denied} from "../../../redux/helpers/messageHelper"
import fileDownload from 'js-file-download'
export default  function AuthorList() {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedItem, setUpdatedItem] = useState("")
    const dispatch = useDispatch()
    const getList = useSelector(authorList)
    const deleteItem = async(id)=>{
      let result = await dispatch(deleteAuthorAsync(id))
      result.error?denied():successed()
    }

    const updateItem = (item)=>{
      setIsUpdate(true);
      setUpdatedItem(item)
    }
    
 
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getMonth()+1;
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
     
      return returnDate
    }

    const exportData = (e)=>{
    //  console.log(getList);
    // //  dispatch(exportAuthorAsync(e))
    // const csvData = getList.map((d) => Object.values(d))
    // console.log(csvData);
    // fileDownload(csvData,"yazar.xlsx")
    const filePath = window
    console.log(filePath);
    //  console.log(e);
    }
    
    const getData = getList.map((item) => ({
      key:item.id,
      fullName:item.firstName+" "+item.lastName,
      // birthDate: getBirthDate(item.birthDate),
      birthDate: item.birthDate&&getBirthDate(item.birthDate),
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
          dataIndex:"configureItem",
          
        }
      ];

      const downloadExcel = ()=>{
        fetch(`${process.env.REACT_APP_API_BASE_URL}/Author/ExportDataPath`)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        console.log(url);
        
      });
      //window.location.href = response.url;
  });
      }
  return (
    <div>
      <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getData} size="middle" /></Col>
      <Col  sm={24} md={12} >
      {isUpdate?<AuthorUpdate isUpdate={isUpdate} setIsUpdate={setIsUpdate} updatedItem={updatedItem} setUpdatedItem={setUpdatedItem} />: <AuthorAdd/>}
       
        </Col>
    </Row>
    <Form onFinish={downloadExcel}>
      <Form.Item name={"savePath"}>
        <Input  />
      </Form.Item>
      <Form.Item>
      <Button  htmlType="submit">Dışa Aktar</Button>
      </Form.Item>
    </Form>
    
    </div>
  )
}
const downloadEmployeeData = () => {
  fetch(`${process.env.REACT_APP_API_BASE_URL}/Author/ExportDataPath`)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'yazar-getir.xlsx';
        a.click();
      });
      //window.location.href = response.url;
  });
}