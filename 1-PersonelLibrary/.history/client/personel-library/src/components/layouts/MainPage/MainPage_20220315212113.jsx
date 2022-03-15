import React from 'react'
import jwtDecode from "jwt-decode"
export default function MainPage() {
    var role;
  let token = localStorage.getItem("token")
  if(token){
    var user = jwtDecode(token);
    console.log(user);
    role = user.UserRole;
    console.log(role);
  }
  return (
    <div>
        
    </div>
  )
}
