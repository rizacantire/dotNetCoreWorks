import React from "react";
import { PageHeader, Button, Menu } from "antd";
import { useSelector,useDispatch } from "react-redux";
import singOutReducer from "../../../../redux/reducers/authenticationSlice"
export default function SiteHeader() {
  let isAuthenticated = useSelector((state)=>state.authentications.isAuthenticated)
  console.log(isAuthenticated);
  const dispatch = useDispatch()
  const handeSingOut = ()=>{
    dispatch(singOutReducer())
    isAuthenticated=false
    console.log(isAuthenticated);
    localStorage.removeItem("token")
  }
  const getir =()=>{
    console.log(isAuthenticated);
  }
  return (
    <div>
      <PageHeader
        style={{backgroundColor:"#f5f5f5"}}
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
          
          <Button onClick={    dispatch(singOutReducer())
          } key="1" type="primary">
            Çıkış Yap
          </Button>
          
        ]}
        
      ></PageHeader>
      <Button onClick={getir} key="1" type="primary">
          Çıkış Yap 2
        </Button>
    </div>
  );
}
