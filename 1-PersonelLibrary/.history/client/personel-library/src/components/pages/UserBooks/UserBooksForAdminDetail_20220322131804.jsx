import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserBooksByUserIdAsync, userBooksByUserId } from '../../../redux/reducers/userBookSlice';
import { Button, Table } from 'antd';

export default function UserBooksForAdminDetail() {
  const dispatch = useDispatch()
  const getList = useSelector(userBooksByUserId)
    const {id} = useParams();
    console.log(id);
    console.log(getList);
  const getir = ()=>{
    dispatch(getUserBooksByUserIdAsync(id))
  }
  return (
    <div>
        tetaytedatasdf
      <Button onClick={getir}>Getir</Button>
        {id}
    </div>
  )
}
