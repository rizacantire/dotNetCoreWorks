import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserBooksForAdminDetail() {
    const {id} = useParams();
    console.log(id);
  return (
    <div>
        tetaytedatasdf
        {id}
    </div>
  )
}
