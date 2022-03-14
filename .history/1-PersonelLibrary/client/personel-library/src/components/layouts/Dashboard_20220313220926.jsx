import React from 'react'
import AuthorList from '../pages/Authors/AuthorList';
import { Route, Routes } from "react-router-dom";

export default function Dashboard() {
  
  return (
    <div>
       <Routes>
        <Route exact path="/" element={ <AuthorList/>} />
        <Route exact path="/yazar" element={ <AuthorList/>} />

      </Routes>
     
    </div>
  )
}
