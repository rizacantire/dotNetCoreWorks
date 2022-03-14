import React, { useEffect } from 'react'
//import { Row, Col, Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';
import AuthorAdd from './AuthorAdd';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid } from '@mui/material';
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
    const getList = useSelector(authorList)
    const getData = getList.map((message) => ({
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
          dataIndex: 'firstName',
        },
        {
          title: 'Doğum Tarihi',
          dataIndex: "birthDate",
        }
      ];

    
  return (
    <div>
      {/* <Row>
      <Col  sm={24} md={12}><Table columns={columns} dataSource={getList} size="middle" /></Col>
      <Col  sm={24} md={12} ><AuthorAdd/></Col>
    </Row> */}
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
    {getList.map((data) => (
      <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          {data.id}
        </TableCell>
        <TableCell align="left">{data.firstName}</TableCell>
        <TableCell align="left">{data.lastName}</TableCell>
        <TableCell align="left">
        {/* <Button onClick={()=>handleDeleteCommentator(data.id)}  size={"small"} variant="contained" color="error" >
           Sil
         </Button>  */}
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
