import { nanoid } from '@reduxjs/toolkit';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addCategory} from '../../../redux/reducers/categorySlice';

export default function CategoryList() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const handeSubmit = (e)=>{
        e.preventDefault();
        dispatch(addCategory({name}))
    }
  return (
    <div>
        <form onSubmit={handeSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </form>
    </div>
  )
}
