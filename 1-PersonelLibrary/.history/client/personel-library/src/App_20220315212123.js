import React from "react";
import SignIn from "./components/pages/LoginPage/SignIn.jsx"
import { useSelector } from "react-redux";
import MainPage from "./components/layouts/MainPage/MainPage.jsx";
export default function App() {
  var isAuthenticated = useSelector((state)=>state.authentications.isAuthenticated)
   
  return (
    <>
       {isAuthenticated?<MainPage/>:<SignIn/>}
      </>
  );
}
