import React from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import { useSelector } from "react-redux";
import MainPage from "./components/layouts/MainPage/MainPage.jsx";
import jwtDecode from "jwt-decode"

export default function App() {
  var isAuthenticated = useSelector((state)=>state.authentications.isAuthenticated)
  var role;
  let token = localStorage.getItem("token")
  if(token){
      var user = jwtDecode(token);
      console.log(user);
      role = user.UserRole;
      console.log(role);
      isAuthenticated =true;
  }
 
   
  return (
    <>
       {isAuthenticated?<MainPage/>:<SignIn/>}
      </>
  );
}