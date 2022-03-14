import React from 'react'
import {useParams} from "react-router-dom"
export default function CategoryUpdate() {
    const {isUpdate} = useParams();
    console.log(isUpdate);
  return (
    <div>CategoryUpdate
        {isUpdate}
    </div>
  )
}
