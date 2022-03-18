import React from "react";
import { PageHeader, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import { BugOutlined } from "@ant-design/icons";

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
          <Menu icon={<BugOutlined style={{fontSize:"20px"}} mode="horizontal" >
            <SubMenu   key="sub1"  />} title="Kullanıcı">
              <Menu.Item  onClick={handeSingOut} key="1">
                Çıkış Yap
              </Menu.Item>
            </SubMenu>
          </Menu>,
        ]}
      ></PageHeader>
    </div>
  );
}
