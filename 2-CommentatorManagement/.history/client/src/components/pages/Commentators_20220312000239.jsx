import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getCommentatorAsync,commentatorList, addCommentatorAsync,deleteCommentatorAsync } from '../../redux/reduce/commentatorSlice';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid } from '@mui/material';
import CommentatorAddPage from './CommentatorAddPage';

export default function Commentators() {
  const dispatch = useDispatch()
  const getData = useSelector(commentatorList)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  const handleSubmit = async ()=>{
    //e.preventDefault()
    let com = {firstName: firstName,lastName:lastName}
    await dispatch(addCommentatorAsync(com))
  }
  const handleDeleteCommentator = async(id)=>{
    await dispatch(deleteCommentatorAsync(id))
  }

  useEffect(() => {
    dispatch(getCommentatorAsync())
    
   }, [dispatch])
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
                <Button onClick={()=>handleDeleteCommentator(data.id)}  size={"small"} variant="contained" color="error" >
                   Sil
                 </Button> 
                  </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Grid>
        <Grid item xs={5}>
          <CommentatorAddPage/>
        </Grid>
      </Grid>
      
   
      </div>
  )
}
