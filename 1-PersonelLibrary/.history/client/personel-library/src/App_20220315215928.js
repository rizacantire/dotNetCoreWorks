import React, { useEffect } from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import { useSelector } from "react-redux";
import MainPage from "./components/layouts/MainPage/MainPage.jsx";
import jwtDecode from "jwt-decode"

export default function App() {
  var isAuthenticated = useSelector((state)=>state.authentications.isAuthenticated)
  let token = localStorage.getItem("token")
  token && (isAuthenticated = true)
  console.log("rneder");
  // useEffect(() => {
  //   console.log(isAuthenticated);

  // }, [])
  
  return (
    <>
       {isAuthenticated?<MainPage/>:<SignIn/>}
      </>
  );
}
