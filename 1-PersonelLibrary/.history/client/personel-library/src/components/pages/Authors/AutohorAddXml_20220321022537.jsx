import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()

  const saveFile = (e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }
  const uploadFile = async(e)=>{
    console.log(file);
    const formData = new FormData()
    formData.append("formFile",file)
    formData.append("fileName",fileName)
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/GetAuthorWithXml`,formData)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
         <form onSubmit={saveFile}>
      <input type="file" onChange={uploadFile}/>
      <input type="submit" value="Upload File" />
    </form>
    </div>
  )
}
