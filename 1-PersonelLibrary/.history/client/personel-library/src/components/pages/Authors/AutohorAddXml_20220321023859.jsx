import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [file, setFile] = useState()

  const saveFile = (e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  const uploadFile = async(e)=>{
    e.preventDefault();
    console.log(file);
    const formData = new FormData()
    formData.append("file",file)
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/GetAuthorWithXml`,formData)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
