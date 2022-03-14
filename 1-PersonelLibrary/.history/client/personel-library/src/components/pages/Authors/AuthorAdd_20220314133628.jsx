import React, {  useState } from "react";
import {  useDispatch } from "react-redux";
import { FormGroup, FormControl, InputLabel, Input,Button } from "@mui/material";
import {addAuthAsync} from "../../../redux/reducers/authorsSlice"


export default function AuthorAdd() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    //e.preventDefault()
    let commentator = { firstName: firstName, lastName: lastName };
    if(window.confirm("Ekleme gerçekleştirilsin mi?")){
        await dispatch(addAuthAsync(commentator));
        setFirstName("")
        setLastName("")
    }   
  };
  return (
    <div style={{margin:"auto"}}>
      <FormGroup sx={{margin:"0em 5em"}}>
        <FormControl sx={{margin:"0.5em 0"}}>
          <InputLabel htmlFor="firstName">Adı</InputLabel>
          <Input value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="firstName" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Soyadı</InputLabel>
          <Input value={lastName} onChange={(e)=>setLastName(e.target.value)} id="lastName" />
        </FormControl>
        <br />
        <Button sx={{width:"80px",margin:"auto"}} variant="contained" onClick={()=>handleSubmit()}
        
        >Ekle</Button>
      </FormGroup>
    </div>
  );
}
