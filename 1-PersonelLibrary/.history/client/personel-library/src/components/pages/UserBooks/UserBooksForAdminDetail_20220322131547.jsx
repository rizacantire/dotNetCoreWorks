import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userBooksByUserId, userBooksByUserId } from '../../../redux/reducers/userBookSlice';
import { Table } from 'antd';

export default function UserBooksForAdminDetail() {
  const dispatch = useDispatch()
  const getList = useSelector(userBooksByUserId)
    const {id} = useParams();
    console.log(id);
    console.log(getList);
   useEffect(async () => {
    await dispatch(userBooksByUserId(id))
   }, [dispatch])
   
  return (
    <div>
        tetaytedatasdf
        <Table></Table>
        {id}
    </div>
  )
}
