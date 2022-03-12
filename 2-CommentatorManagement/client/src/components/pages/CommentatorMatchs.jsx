import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCommentatorMatchAsync,
  commentatorMatchList,deleteCommentatorMatchAsync
} from "../../redux/reduce/commentatorMatchSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
export default function CommentatorMatchs() {
  const dispatch = useDispatch();
  const getData = useSelector(commentatorMatchList);
  useEffect(() => {
    dispatch(getCommentatorMatchAsync());
  }, [dispatch]);

  const handleDeleteCommentator =async (id)=> {
    if(window.confirm("Silmek istediğine emin misin?"))
    { await dispatch(deleteCommentatorMatchAsync(id))
    }
  };


  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Ev Sahibi</TableCell>
              <TableCell>Konuk Takım</TableCell>
              <TableCell>Skor</TableCell>
              <TableCell>Anlatan</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="left">{data.match.homeName}</TableCell>
                <TableCell align="left">{data.match.awayName}</TableCell>
                <TableCell align="left">{data.match.homegoalcount} - {data.match.awaygoalcount}</TableCell>
                <TableCell align="left">{data.commentator.firstName} {data.commentator.lastName}</TableCell>
                <TableCell>
                  <Button onClick={()=>handleDeleteCommentator(data.id)} size={"small"} variant="contained" color="secondary" >Sil</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
