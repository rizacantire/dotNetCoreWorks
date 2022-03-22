import { Form,Input,Table,Button } from 'antd'
import  axios  from 'axios';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorXmlList, getAuthorsByExcel } from '../../../redux/reducers/authorSlice';

export default function AutohorAddXml() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log(selectedFile);
  }

  return (
    <div>
         <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
    </div>
  )
}
