import { Form,Input,Table,Button } from 'antd'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
    const [form] = Form.useForm();
    
    const dispatch = useDispatch()
    const getList = useSelector(authorXmlList)
    const getData = getList.map((item) => ({
        key:item.id,
        fullName:item.firstName+" "+item.lastName}))
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

      const onFinish=(values) =>{
        console.log(getList);
          console.log(values);
      }
      const handleFileSelected = (e) => {
        const files = Array.from(e)
        console.log("files:", files)
        dispatch(getAuthorsByExcel(files))
      }
      useEffect(() => {
        dispatch(getAuthorsByExcel())
    }, [dispatch])

  return (
    <div>
        <Form  form={form}
            onFinish={handleFileSelected}
           
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal">
      <Form.Item>
        <Input onChange={handleFileSelected} type="file"/>
      </Form.Item>
      <Form.Item label=" ">
        <Button  type="primary" htmlType="submit">Getir</Button>
      </Form.Item>
    </Form>
    <Table columns={columns} dataSource={getData} size="middle" />
    </div>
  )
}
