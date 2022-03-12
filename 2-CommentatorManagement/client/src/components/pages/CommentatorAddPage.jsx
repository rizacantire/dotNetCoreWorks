import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommentatorAsync } from "../../redux/reduce/commentatorSlice";
import { FormGroup, FormControl, InputLabel, Input,Button } from "@mui/material";

export default function CommentatorAddPage() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    //e.preventDefault()
    let commentator = { firstName: firstName, lastName: lastName };
    if(window.confirm("Ekleme gerçekleştirilsin mi?")){
        await dispatch(addCommentatorAsync(commentator));
        setFirstName("")
        setLastName("")
    }   
  };

  return (
    <div>
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
