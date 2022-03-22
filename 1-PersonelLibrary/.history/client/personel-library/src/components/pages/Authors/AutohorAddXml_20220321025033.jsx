import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [file, setFile] = useState()
  const dispatch = useDispatch()

  const saveFile = (e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  const uploadFile = async(e)=>{
    e.preventDefault();
    console.log(file);
    
    await dispatch(getAuthorsByExcel(file))
    console.log(authorXmlList);
  }
  return (
    <div>
         <form onSubmit={uploadFile}>
      <input type="file" onChange={saveFile}/>
      <input type="submit" value="Upload File" />
    </form>
    </div>
  )
}
