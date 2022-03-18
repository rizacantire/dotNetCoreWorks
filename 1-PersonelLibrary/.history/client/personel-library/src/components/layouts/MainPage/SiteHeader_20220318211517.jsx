import React from "react";
import { PageHeader, Menu } from "antd";
import { useDispatch } from "react-redux";
import { signOutReduce } from "../../../redux/reducers/authenticationSlice";
import { BugOutlined, UserOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode"
import background from "../../../images/admin-page.jpg";

export default function SiteHeader() {
  let token = localStorage.getItem("token")
  var user = jwtDecode(token);
  let role =user.UserRole
  let pageTitle = ""
  let fullName = user.FullName;
  let selam = "aaa"
  const { SubMenu } = Menu;
  let backColor="";
  role==="Admin"?(backColor="#fcad03"):(backColor="black")
  role==="Admin"&&(pageTitle="Admin Panel")
  const dispatch = useDispatch();

  const handeSingOut = () => {
   
    dispatch(signOutReduce());
    window.location.reload(true);
  };
  return (
    <div>
      <PageHeader
     
     style={{backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat",width: "100%",height: "120px",
     backgroundSize: "cover",}}
        ghost={false}
        onBack={() => window.history.back()}
        title={
          
          <Menu style={{backgroundColor:"red"}} key="menu1" theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item className="border" key="3">
              nav 3
            </Menu.Item>
          </Menu>
          
        }
        subTitle={pageTitle}
        extra={[
          <Menu key="menu2"
          style={{backgroundColor:"red",width: "190px" }} 
            icon={<BugOutlined style={{ fontSize: "25px" }} />}
         
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
