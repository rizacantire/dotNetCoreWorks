import React from 'react'
import AuthorList from '../../../pages/Authors/AuthorList';
import { Route, Routes } from "react-router-dom";
import CategoryList from '../../../pages/Categories/CategoryList';
import BookAdd from '../../../pages/Books/BookAdd';
import BookList from "../../../pages/Books/BookList"
import UserList from '../../../pages/Users/UserList';
import AutohorAddXml from '../../../pages/Authors/AutohorAddXml';
export default function Dashboard() {
  
  return (
    <div>
       <Routes>
        <Route exact path="/" element={ <AuthorList/>} />
        <Route exact path="/yazar" element={ <AuthorList/>} />
        <Route exact path="/kategori" element={ <CategoryList/>} />
        <Route exact path="/kitap" element={ <BookAdd/>} />
        <Route exact path='/kitaplar' element={<BookList/>}/>
        <Route exact path='/kitap-ekle' element={<BookAdd/>}/>
        <Route exact path='/uyeler' element={<UserList/>}/>
        <Route exact path='/yazar-excel' element={<AutohorAddXml/>}/>




      </Routes>
     
    </div>
  )
}
