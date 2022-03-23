import React from 'react'

export default function UpdateUserBook({currentItem}) {
  const getBook = currentItem;
  return (
    <div>
      {getBook.bookName}
    </div>
  )
}
