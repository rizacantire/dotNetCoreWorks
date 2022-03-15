import React from "react";
import { PageHeader, Button, Menu } from 'antd';


export default function SiteHeader() {
  return (
    <div>
       <PageHeader
      ghost={true}
      //onBack={() => window.history.back()}
      title={<Menu  theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item className="border"  key="3">nav 3</Menu.Item>
      <Menu.Item  className="border d-block mr-0 ml-auto">
        <Button >Çıkış Yap</Button>
        </Menu.Item>
     
    </Menu>}
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    ></PageHeader>
      
      
    </div>
  );
}
