import React from "react";
import {  Button, Menu } from "antd";


export default function SiteHeader() {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item  key="3">nav 3</Menu.Item>
        <Button className="d-block mr-0 ml-auto">Çıkış Yap</Button>
       
      </Menu>
      
    </div>
  );
}
