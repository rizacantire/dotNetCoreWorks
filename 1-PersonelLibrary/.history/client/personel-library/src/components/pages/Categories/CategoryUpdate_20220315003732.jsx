import React from 'react'
import {useParams} from "react-router-dom"
export default function CategoryUpdate({isUpdate}) {
    const {aaa} = useParams();
    console.log(aaa);
  return (
    <div>CategoryUpdate
        {aaa}
    </div>
  )
}
