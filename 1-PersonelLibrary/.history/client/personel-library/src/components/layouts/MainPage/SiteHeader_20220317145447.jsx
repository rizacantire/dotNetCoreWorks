import React from "react";
import { PageHeader, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import { BugOutlined, UserOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode"

export default function SiteHeader() {
  let token = localStorage.getItem("token")
  var user = jwtDecode(token);
  let fullName = user.FullName;
  
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
          <Menu key="menu1" theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item className="border" key="3">
              nav 3
            </Menu.Item>
          </Menu>
        }
        extra={[
          <Menu key="menu2"
            icon={<BugOutlined style={{ fontSize: "25px" }} />}
            style={{ width: "190px" }}
            mode="vertical"
          >
            <SubMenu key="subKey" icon={<UserOutlined style={{ fontSize: "25px" }} />} title={fullName}>
              <Menu.Item onClick={handeSingOut} key="4">
                Çıkış Yap
              </Menu.Item>
            </SubMenu>
          </Menu>,
        ]}
      ></PageHeader>
    </div>
  );
}
