import React from "react";
import {  Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function SideNavi() {

  const { SubMenu } = Menu;


  return (
    <div>
      <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Yazar">
              <Menu.Item key="1">
                <Link to={"/yazar"}>Yazar</Link>
              </Menu.Item>
              <Menu.Item key="2"><Link to={"/yazar-excel"}>Excel'den Yazar Ekle</Link></Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Kitaplık">
              <Menu.Item key="4"><Link to={"/kategori"}>Kategori</Link></Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub3" icon={<LaptopOutlined />} title="Kitap">
              <Menu.Item key="5">
                <Link to={"/kitaplar"}>Kitap Listesi</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={"/kitap-ekle"}>Kitap Ekle</Link>
              </Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub4" icon={<NotificationOutlined />} title="Üyeler">
              <Menu.Item key="9">
                <Link to={"/uyeler"}>
                Üye Listesi</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to={"/uye-kitap"}>
                Üye Kitap Ekranı</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to={"/uye-yetki"}>
                Yetkilendirme</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
    </div>
  );
}
