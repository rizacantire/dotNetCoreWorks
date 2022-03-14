import React, {  useState } from "react";
import {  useDispatch } from "react-redux";
import { FormGroup, FormControl, InputLabel, Input,Button } from "@mui/material";
import { addCatAsync } from "../../../redux/reducers/catSlice";

export default function CategoryAdd() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleSubmit = async () => {
        //e.preventDefault()
        let commentator = { name: name };
        if(window.confirm("Ekleme gerçekleştirilsin mi?")){
            await dispatch(addCatAsync(commentator));
            setName("")
        }   
      };
  return (
    <div>
<FormGroup sx={{margin:"0em 5em"}}>
        <FormControl sx={{margin:"0.5em 0"}}>
          <InputLabel htmlFor="name">Adı</InputLabel>
          <Input value={name} onChange={(e)=>setName(e.target.value)} id="name" />
        </FormControl>
        
        <br />
        <Button sx={{width:"80px",margin:"auto"}} variant="contained" onClick={()=>handleSubmit()}
        
        >Ekle</Button>
      </FormGroup>
    </div>
  )
}
