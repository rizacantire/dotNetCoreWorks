import React from 'react'
import {useParams} from "react-router-dom"
export default function CategoryUpdate({isUpdate}) {
    const {aaa} = useParams();
    console.log(isUpdate);
  return (
    <div>CategoryUpdate
        {isUpdate}
    </div>
  )
}
