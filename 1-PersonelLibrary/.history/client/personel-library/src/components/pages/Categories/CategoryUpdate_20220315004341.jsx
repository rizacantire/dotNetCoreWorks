import React from 'react'
import {useParams} from "react-router-dom"
export default function CategoryUpdate(props) {
   console.log(props.isUpdate);
  return (
    <div>CategoryUpdate
        {props.isUpdate}
    </div>
  )
}
