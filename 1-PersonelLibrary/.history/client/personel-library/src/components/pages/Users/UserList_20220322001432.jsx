import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAsync
} from "../../../redux/reducers/userSlice";
import { Table, Button,Row,Col } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import UpdatePass from "./UpdatePass";
import { changeRoleAsync } from "../../../redux/reducers/authenticationSlice";

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

  const addRole=(id)=>{
    
  }
  const removeRole=(id)=>{
    
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
          <Button
            size="small"
            type="primary"
            onClick={() => {
              console.log(e.id);
            }}
          >
            Yetkilendir
          </Button>
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
