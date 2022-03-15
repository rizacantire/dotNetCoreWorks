import React from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import jwtDecode from "jwt-decode";
import UserMain from "./components/layouts/UserPage/UserMain.jsx"
import AdminMain from './components/layouts/AdminPage/AdminMain.jsx'
export default function App() {
  var role;
  let token = localStorage.getItem("token")

  return (
    <>
       {token}?"":<SignIn/>
      </>
  );
}
