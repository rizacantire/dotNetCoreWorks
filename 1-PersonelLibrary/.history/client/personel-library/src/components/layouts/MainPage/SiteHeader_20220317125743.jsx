import React from "react";
import { PageHeader, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import { BugOutlined,UserOutlined } from "@ant-design/icons";

export default function SiteHeader() {
  const { SubMenu } = Menu;

  const dispatch = useDispatch();

  const handeSingOut = () => {
    dispatch(signOutReduce());
  };
  return (
    <div>
      <PageHeader
        style={{ backgroundColor: "#f5f5f5" }}
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
          <Menu   icon={<BugOutlined style={{fontSize:"25px"}}/>} style={{width:"190px"}}  mode="vertical" >

              
         <SubMenu icon={<UserOutlined style={{fontSize:"25px"}}/>}>
         <Menu.Item  onClick={handeSingOut} key="1">
                Çıkış Yap
              </Menu.Item>
              <Menu.Item   onClick={handeSingOut} key="2">
                Çıkış Yap
              </Menu.Item>
         </SubMenu>
            
          </Menu>
        ]}
      ></PageHeader>
    </div>
  );
}
