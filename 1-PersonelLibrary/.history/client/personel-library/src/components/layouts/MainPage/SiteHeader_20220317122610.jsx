import React from "react";
import { PageHeader, Button, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import ButtonGroup from "antd/lib/button/button-group";
import { BugOutlined } from '@ant-design/icons';

export default function SiteHeader() {
  const dispatch = useDispatch();

  const handeSingOut = ()=>{
    dispatch(signOutReduce())
  }
  return (
    <div>
      <PageHeader
        style={{backgroundColor:"#f5f5f5"}}
        ghost={false}
        onBack={() => window.history.back()}
        title={
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item className="border" key="3">
              nav 3
            </Menu.Item>
          </Menu>
        }
        extra={[
          <ButtonGroup icon={<BugOutlined />}>
            <BugOutlined style={{ fontSize: '35px', color: '#08c' }} >
            <Button onClick={handeSingOut} key="1" type="primary">
            Çıkış Yap
          </Button>
            </BugOutlined>

             <Button onClick={handeSingOut} key="1" type="primary">
            Çıkış Yap
          </Button>
          </ButtonGroup>
         
        ]}
      ></PageHeader>
    </div>
  );
}