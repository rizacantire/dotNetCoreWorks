import React from "react";
import { useSelector } from "react-redux";
import MainPage from "./components/layouts/MainPage/MainPage.jsx";
import Index from "./components/pages/Index.jsx";

export default function App() {
  var isAuthenticated = useSelector((state)=>state.authentications.isAuthenticated)
  let token = localStorage.getItem("token")
  token && (isAuthenticated = true)
  
  return (
    <>
       {isAuthenticated?<MainPage/>:<Index/>}
      </>
  );
}
