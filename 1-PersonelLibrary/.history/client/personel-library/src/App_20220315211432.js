import React, { useEffect } from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import jwtDecode from "jwt-decode";
import UserMain from "./components/layouts/UserPage/UserMain.jsx"
import AdminMain from './components/layouts/AdminPage/AdminMain.jsx'
import { useSelector } from "react-redux";
export default function App() {
  var isAuthenticated = useSelector((state)=>state.isisAuthenticated)
  var role;
  let token = localStorage.getItem("token")
  useEffect(() => {
   
  }, [token])
  console.log(isAuthenticated);
  
  return (
    <>
       {token?"":<SignIn/>}
      </>
  );
}
