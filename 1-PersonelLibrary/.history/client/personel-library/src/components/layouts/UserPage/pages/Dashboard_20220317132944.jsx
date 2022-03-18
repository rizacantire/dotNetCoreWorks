import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserBookList from '../../../pages/UserBooks/UserBookList'

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path='kitaplarim' element={<UserBookList/>} />
      </Routes>
    </div>
  )
}
