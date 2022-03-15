import React from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import jwtDecode from "jwt-decode";
import Main from "./components/layouts/UserPage/Main.jsx"
import AdminMain from './components/layouts/AdminPage/AdminMain.jsx'
export default function App() {
  var role;
  let token = localStorage.getItem("token")
  if(token){
    var user = jwtDecode(token);
    console.log(user);
    role = user.UserRole;
    console.log(role);
    return(
      <AdminMain/>
    )
   
  }
  return (
    <>
       <SignIn/>
      </>
  );
}
