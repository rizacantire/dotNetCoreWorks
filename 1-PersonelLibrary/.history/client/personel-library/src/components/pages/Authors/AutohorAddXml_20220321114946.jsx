import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel,addAuthorRangeAsync } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [form] = Form.useForm();
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const getList = useSelector(authorXmlList)
  const saveFile = (e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  const uploadFile = async(e)=>{
    e.preventDefault();
    console.log(file);
    
    await dispatch(getAuthorsByExcel(file))
    console.log(getList);
  }

  const addRange = ()=>{
    dispatch(addAuthorRangeAsync(getList));
  }
  const columns = [
    {
      title: 'Yazar',
      render : (record)=> record.firstName + " "+record.lastName
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
  return (
    <div>
         <form onSubmit={uploadFile}>
      <input type="file" onChange={saveFile}/>
      <input type="submit" value="Upload File" />
    </form>
    <Form  form={form}
            //onFinish={onFinish}
            //onFinishFailed={error}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{margin:"auto",width:"20em"}}
      layout="horizontal">
      <Form.Item>
        <Input type="file"/>
      </Form.Item>
      <Form.Item>
      <Button type={"primary"}>Getir</Button>
      </Form.Item>
    </Form>

    <Table columns={columns} dataSource={getList} size="middle" />
    <Button onClick={addRange}>Ekle</Button>
    </div>
  )
}
