import React, { useEffect,useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';

export default  function AuthorList() {
 
  const dispatch = useDispatch()
  const getData = useSelector(authorList)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  console.log(getData);
  
  useEffect(() => {
    dispatch(getAuthorsAsync())
    
   }, [dispatch,getData])
    
  return (
    <div>
     <Grid container spacing={2}>

<Grid item xs={7}>
<TableContainer>
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Id</TableCell>
      <TableCell>İsim</TableCell>
      <TableCell>Soyisim</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {getData.map((data) => (
      <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          {data.id}
        </TableCell>
        <TableCell align="left">{data.firstName}</TableCell>
        <TableCell align="left">{data.lastName}</TableCell>
        <TableCell align="left">
        
          </TableCell>
        
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</Grid>
<Grid item xs={5}>
  <AuthorAdd/>
</Grid>
</Grid>
        
        
        
    </div>
  )
}
