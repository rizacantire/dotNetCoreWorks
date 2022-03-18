import React from 'react'
import jwtDecode from "jwt-decode"
import UserMain from '../UserPage/UserMain';
import AdminMain from "../AdminPage/AdminMain"
export default function MainPage() {
    var role;
    let token = localStorage.getItem("token")
    if(token){
        var user = jwtDecode(token);
        role = user.UserRole;
    }
    return(
        <div>
            {(role==="Admin")?<AdminMain/>:<UserMain/>}
        </div>
    )
}
