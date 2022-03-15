import React from "react";
import { PageHeader, Button, Menu } from 'antd';


export default function SiteHeader() {
  
  return (
    <div>
       <PageHeader
      ghost={false}
      //onBack={() => window.history.back()}
      title={<Menu  theme="" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item className="border"  key="3">nav 3</Menu.Item>
     
    </Menu>}
      extra={[
       
        <Button key="1" type="primary">
          Çıkış Yap
        </Button>,
      ]}
    ></PageHeader>
    <SubMenu style={{float: 'right'}} title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
      
      
    </div>
  );
}
