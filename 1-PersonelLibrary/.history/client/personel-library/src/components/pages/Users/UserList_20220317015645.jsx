import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAsync,
  updatePassAsync,
} from "../../../redux/reducers/userSlice";
import { Table, Button,Row,Col } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import UpdatePass from "./UpdatePass";

export default function UserList() {
  const [isUpdatePass, setIsUpdatePass] = useState(false);
  const [updateCol, setUpdateCol] = useState(24);

  const updatePass = () => {
    setIsUpdatePass(true);
  };

  const dispatch = useDispatch();
  const getList = useSelector((state) => state.users.items);
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
            onClick={() => {
              console.log(e);
            }}
          >
            Şifre Güncelle
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              console.log(e);
            }}
          >
            Yekilendir
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  console.log(getList);
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <div>
     
      <Row>
      <Col  sm={24} md={updateCol}>
      <Table rowKey="id" columns={columns} dataSource={getList} size="middle" />
        </Col>
      <Col  sm={24} md={updateCol} >
     {isUpdatePass&&<UpdatePass/>}
       
        </Col>
    </Row>
        
    </div>

    
  );
}
