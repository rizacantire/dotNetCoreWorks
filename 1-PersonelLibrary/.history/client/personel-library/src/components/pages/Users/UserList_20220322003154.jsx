import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAsync
} from "../../../redux/reducers/userSlice";
import { Table, Button,Row,Col } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import UpdatePass from "./UpdatePass";
import { changeRoleAsync } from "../../../redux/reducers/authenticationSlice";
import { denied, successed } from "../../../redux/helpers/messageHelper";

export default function UserList() {
  const [isUpdatePass, setIsUpdatePass] = useState(false);
  const [updateCol, setUpdateCol] = useState(24);
  const [listCol, setListCol] = useState(24);
  const [updateUser, setUpdateUser] = useState({});
  const getList = useSelector((state) => state.users.items);
  const dispatch = useDispatch();
  const updatePass = (event) => {
    setIsUpdatePass(true)    
    setUpdateCol(6)
    setListCol(18)
    setUpdateUser(event)
  }
  const addRole=async(id)=>{
  
    const result = await dispatch(changeRoleAsync({userId:id,role:"Admin"}))
    await dispatch(getUsersAsync())
    result.error?denied():successed("Yetkilendirme gerçekleşti.")
  }
  const removeRole=async(id)=>{

    const result = await dispatch(changeRoleAsync({userId:id,role:"User"}))
    dispatch(getUsersAsync())

    result.error?denied():successed("Yetki silindi.")

   
  }
  const columns = [
    {
      title: "İsim",
      dataIndex: "firstName",
    },
    {
      title: "Soyisim",
      dataIndex: "lastName",
    },
    {
      title: "Mail",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "roles",
    },
    {
      title: "",
      dataIndex: "",
      render: (e) => (
        <ButtonGroup>
          <Button
            size="small"
            type="primary"
            danger
            onClick={()=>updatePass(e)}
          >
            Şifre Güncelle
          </Button>
         { e.roles[0]==="User"?
          <Button size="small" type="primary" onClick={() => {addRole(e.id)}}>
            Yetkilendir
          </Button>:
          <Button onClick={()=>{removeRole(e.id)}} size="small" type="primary">Yetki Sil</Button>}
        </ButtonGroup>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <div>
     
      <Row>
      <Col  sm={24} md={listCol}>
      <Table rowKey="id" columns={columns} dataSource={getList} size="middle" />
        </Col>
      <Col  sm={24} md={updateCol} >
     {isUpdatePass&&<UpdatePass updateUser={updateUser} />}
       
        </Col>
    </Row>
        
    </div>

    
  );
}
