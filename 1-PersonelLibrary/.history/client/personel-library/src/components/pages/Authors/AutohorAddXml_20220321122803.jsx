import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel,addAuthorRangeAsync,removeXmlItem } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [form] = Form.useForm();
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const getList = useSelector(authorXmlList)
  const saveFile = (e)=>{
    setFile(e.target.files[0])
  }

  console.log("render");
  const uploadFile = async(e)=>{
    e.preventDefault();
    await dispatch(getAuthorsByExcel(file))
  }


  const addRange = ()=>{
    //dispatch(addAuthorRangeAsync(getList));
    console.log(getList);
  }

  const removeItem = (e)=>{
    dispatch(removeXmlItem(e))
  }
  const columns = [
    {
      title: 'Yazar',
      render : (record)=> record.firstName + " "+record.lastName
    },
    {
      title:"",
      render:(record)=> <Button type='danger' size="small" onClick={()=>removeItem(record)}>Kaldır</Button>,
    }
  ];
 
  return (
    <div>
    <Form  form={form}
            
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{margin:"2em auto",width:"45em"}}
      layout="horizontal">
      <Form.Item style={{marginBottom:"3em"}}  label="Excel Dosyası Yükleyin">
        <Input onChange={saveFile} type="file"/>
      </Form.Item>
      <Form.Item style={{ margin:"0",
  position: "relative",
  left: "30%",  transform: "translateY(-50%)"}}>
      <Button onClick={uploadFile} type={"primary"}>Listele</Button>
      </Form.Item>
    </Form>

    <Table columns={columns} dataSource={getList} size="middle" />
    <Button type={"primary"} style={{ margin:"0",
  position: "relative",
  left: "30%",  transform: "translateY(-50%)"}} onClick={addRange}>Ekle</Button>
    </div>
  )
}
