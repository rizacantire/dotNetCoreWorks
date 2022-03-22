import React from "react";
import { PageHeader, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import { BugOutlined, UserOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode"
import { Link } from "react-router-dom";

export default function SiteHeader() {
  let token = localStorage.getItem("token")
  var user = jwtDecode(token);
  let role =user.UserRole
  let pageTitle = ""
  let fullName = user.FullName;
  const { SubMenu } = Menu;
  let backColor="";
  role==="Admin"?(backColor="#daeddc"):(backColor="#bcc9eb")
  role==="Admin"&&(pageTitle="Admin Panel")
  const dispatch = useDispatch();

  const handeSingOut = () => {
    dispatch(signOutReduce());
    window.location.reload(true);
  };
  return (
    <div>
      <PageHeader style={{backgroundColor:backColor}}
        ghost={true}
        onBack={() => window.history.back()}
        title={
          <Menu
          style={{backgroundColor:backColor}}
          key="menu1" theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={"/kitaplar"}>Kitaplar</Link>
            </Menu.Item>
            <Menu.Item key="2"><Link to={"/yazar"}>Yazarlar</Link></Menu.Item>
            {/* {role==="Admin"&&(<Menu.Item className="border" key="3">
             <Link to={"/uyeler"}>Üye Listesi</Link>
            </Menu.Item>)} */}
          </Menu>
        }
        //subTitle={pageTitle}
        extra={[
          <Menu key="menu2"
          style={{backgroundColor:backColor}}
          icon={<BugOutlined style={{ fontSize: "25px" }} />}
          mode="vertical">
            <SubMenu key="subKey" icon={<UserOutlined style={{ fontSize: "25px" }} />} title={fullName}>
              <Menu.Item onClick={handeSingOut} key="4">
                Çıkış Yap
              </Menu.Item>
            </SubMenu>
          </Menu>
        ]}
      ></PageHeader>
    </div>
  );
}
