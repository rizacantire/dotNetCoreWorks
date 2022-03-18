import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUserBook from '../../../pages/UserBooks/AddUserBook'
import UserBookList from '../../../pages/UserBooks/UserBookList'

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path='/kitaplarim' element={<UserBookList/>} />
        <Route exact path='/kitap-ekle' element={<AddUserBook/>} />

      </Routes>
    </div>
  )
}
