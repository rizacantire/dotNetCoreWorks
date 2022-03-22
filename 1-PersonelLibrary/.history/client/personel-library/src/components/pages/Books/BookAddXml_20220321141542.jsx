import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { bookXmlList, getBooksByExcel,addBookRangeAsync,removeBookXmlItem } from '../../../redux/reducers/bookSlice';

export default function BookAddXml() {
  const [form] = Form.useForm();
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const getList = useSelector(bookXmlList)
  const saveFile = (e)=>{
    setFile(e.target.files[0])
  }

  console.log("render");
  const uploadFile = async(e)=>{
    e.preventDefault();
    await dispatch(getBooksByExcel(file))
  
  }
  const book = {
    name:"",
    authorId:"",
    categoryId:""
  }

  const addRange = async()=>{
    let liste = []
    getList.map(u=> liste.push({
      name:u.name,
      authorId:u.authorId,
      categoryId:u.categoryId
    }))
    const res = dispatch(await addBookRangeAsync(liste));
    console.log(res);
  }

  const removeItem = (e)=>{
    dispatch(removeBookXmlItem(e))
  }
  const columns = [
    {
      title: 'Kitap',
      dataIndex:"name"
      // render : (record)=> record.name
    },
    {
      title: 'Yazar',
      render : (record)=> record.authorFirstName + " " +record.authorLastName
    },
    {
      title: 'Kategori',
      dataIndex:"categoryName"
      // render : (record)=> record.name
    },
    {
      title:"",
      render:(record)=> <Button type='danger' size="small" onClick={()=>removeItem(record)}>Kaldır</Button>,
    }
  ];
 
  return (
    <div>
    <Form  form={form}
            
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 8 }}
     
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
