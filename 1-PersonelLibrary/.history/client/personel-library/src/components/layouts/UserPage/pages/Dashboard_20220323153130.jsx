import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthorBookList from '../../../pages/AuthorBooks/AuthorBookList'
import AddUserBook from '../../../pages/UserBooks/AddUserBook'
import UserBookList from '../../../pages/UserBooks/UserBookList'
import UserBooksForAdminDetail from '../../../pages/UserBooks/UserBooksForAdminDetail'
import UserBooksReaded from '../../../pages/UserBooks/UserBooksReaded'
import BookList from "../pages/BookList"
export default function Dashboard() {
  return (
    <div>
      <Routes>
  
        <Route exact path='/kitaplarim' element={<UserBookList/>} />
        <Route exact path='/kitap-ekle' element={<AddUserBook/>} />
        <Route exact path='/kitaplar' element={<BookList/>} />
        <Route exact path='/yazar' element={<AuthorBookList/>} />
        <Route exact path='/okuduklarim' element={<UserBooksReaded/>} />
        <Route exact path='uyeler' element={<UserBooksForAdminDetail/>} />
      </Routes>
    </div>
  )
}
