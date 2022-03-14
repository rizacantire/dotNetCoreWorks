import React from 'react'
import { Layout } from "antd";
export default function SiteFooter() {
  const {  Footer } = Layout;

  return (
    <div>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
    </div>
  )
}
