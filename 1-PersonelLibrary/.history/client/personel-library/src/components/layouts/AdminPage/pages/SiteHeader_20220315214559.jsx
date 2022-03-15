import React from "react";
import { PageHeader, Button, Menu } from 'antd';

export default function SiteHeader() {
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
  return (
    <div>
       <PageHeader
      ghost={false}
      //onBack={() => window.history.back()}
      title={<Menu  theme="" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item className="border"  key="3">nav 3</Menu.Item>
      <Button>Tik</Button>
    </Menu>}
      extra={[
       
        <Button key="1" type="primary">
          Çıkış Yap
        </Button>
      ]}
      
    ></PageHeader>
    
      
      
    </div>
  );
}
