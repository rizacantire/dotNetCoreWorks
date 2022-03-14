import { Button } from 'antd';
import React from 'react'
export default function CategoryUpdate(props) {
   console.log("porps",props.isUpdate);
   const changeUpdate=()=>{
        props.isUpdate=false
   }
  return (
    <div>CategoryUpdate
        {props.isUpdate}
        <Button onClick={changeUpdate}>Update</Button>
    </div>
  )
}
