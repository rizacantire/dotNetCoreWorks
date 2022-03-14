import React, { useEffect } from 'react'
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
    const authorListData = useSelector(authorList)
   
    const getBirthDate =(birthDate)=>{
      var dateObj = new Date(birthDate);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var returnDate = day.toString()+"-"+month.toString() +"-" +year.toString()
      return returnDate
    }
   
    const getData = authorListData.map((message) => ({
      key:message.id,
      fullName:message.firstName+" "+message.lastName,
      birthDate: getBirthDate(message.birthDate)
     
    }));

    useEffect(() => {
        dispatch(getAuthorsAsync())
    }, [dispatch])
    
    const columns = [
        {
          title: 'Yazar',
          dataIndex: 'fullName',
        },
        {
          title: 'Doğum Tarihi',
          dataIndex: "birthDate",
        }
      ];

    
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
