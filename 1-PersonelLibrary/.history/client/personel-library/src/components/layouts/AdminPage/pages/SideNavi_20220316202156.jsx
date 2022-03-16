import React from "react";
import {  Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function SideNavi() {
  var role;
  let token = localStorage.getItem("token")
  if(token){
    var user = jwtDecode(token);
    console.log(user);
    role = user.UserRole;
    console.log(role);
  }
  const { SubMenu } = Menu;


  return (
    <div>
      <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Kitaplık">
              <Menu.Item key="1">
                <Link to={"/yazar"}>Yazar</Link>
              </Menu.Item>
              <Menu.Item key="2"><Link to={"/kategori"}>Kategori</Link></Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Kitap">
              <Menu.Item key="5">
                <Link to={"/kitaplar"}>Kitap Listesi</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={"kitap-ekle"}>Kitap Ekle</Link>
              </Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Üyeler">
              <Menu.Item key="9">Üye Listesi</Menu.Item>
              <Menu.Item key="10">Üye Kitap Ekranı</Menu.Item>
              <Menu.Item key="10">Üye Yetkilendirme</Menu.Item>
            </SubMenu>
          </Menu>
    </div>
  );
}
