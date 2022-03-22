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
          console.log(values);
      }
      useEffect(() => {
        dispatch(getAuthorsByExcel())
    }, [dispatch])

  return (
    <div>
        <Form  form={form}
            onFinish={onFinish}
           
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal">
      <Form.Item>
        <Input onChange={onFinish} type="file"/>
      </Form.Item>
      <Form.Item label=" ">
        <Button  type="primary" htmlType="submit">Getir</Button>
      </Form.Item>
    </Form>
    <Table columns={columns} dataSource={getData} size="middle" />
    </div>
  )
}
