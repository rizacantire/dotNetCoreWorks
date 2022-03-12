import React,{useState} from "react";
import {commentatorList} from "../../redux/reduce/commentatorSlice";
import { useSelector } from "react-redux";
import {Select,MenuItem} from "@mui/material"

export default function Selectable() {
  const getCommentators = useSelector(commentatorList);
  const [value, setValue] = useState("");
  const handleChange = event => setValue(event.target.value);
  console.log(value);
  return (
    <div>
      <Select size={"small"} onChange={handleChange}>
      <MenuItem value="" > <em>None</em></MenuItem>
         {getCommentators.map((s) => (
          <MenuItem key={s.id} value={s.id}>{s.firstName} {s.lastName}</MenuItem>
        ))} 
      </Select>
    </div>
  );
}
