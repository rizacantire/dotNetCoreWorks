import React from 'react'
import AuthorList from '../pages/Authors/AuthorList';
import { Route, Routes } from "react-router-dom";
import CategoryList from '../pages/Categories/CategoryList';
import Authors from '../pages/Authors/Authors';

export default function Dashboard() {
  
  return (
    <div>
       <Routes>
        <Route exact path="/" element={ <AuthorList/>} />
        <Route exact path="/yazar" element={ <AuthorList/>} />
        <Route exact path="/kategori" element={ <CategoryList/>} />
        <Route exact path="/authors" element={ <Authors/>} />
      </Routes>
     
    </div>
  )
}
