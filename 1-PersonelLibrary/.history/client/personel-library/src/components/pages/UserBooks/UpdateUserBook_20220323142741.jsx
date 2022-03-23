import React from 'react'

export default function UpdateUserBook({currentItem}) {
  const getBook = currentItem;
  console.log(getBook);
  return (
    <div>
      {getBook.bookName}
    </div>
  )
}
