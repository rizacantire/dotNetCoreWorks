import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [selectedFile, setSelectedFile] = React.useState(null);
 const getList = useSelector(authorXmlList)
 const dispatch = useDispatch()
  const handleSubmit = async(event) => {
    dispatch(getAuthorsByExcel())
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log(selectedFile);
  }
  console.log(getList);

  return (
    <div>
         <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
    </div>
  )
}
