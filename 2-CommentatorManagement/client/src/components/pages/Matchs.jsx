import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import {
  getMatchsAsync,
  matchList,
} from "../../redux/reduce/matchSlice";

export default function Matchs() {
  const dispatch = useDispatch();
  let url = "https://cdn.footystats.org/img/";
  const getData = useSelector(matchList);
  console.log(getData);
  useEffect(() => {
    dispatch(getMatchsAsync());
  }, [dispatch]);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell style={{maxWidth:"2px"}}>Sezon</TableCell>
            <TableCell style={{maxWidth:"10px"}}>Hafta</TableCell>
              <TableCell>Ev Sahibi</TableCell>
              <TableCell>Konuk Takım</TableCell>
              <TableCell>Stadyum</TableCell>
              <TableCell>İlk Yarı</TableCell>
              <TableCell>Maç Sonu</TableCell>
              <TableCell>Korner</TableCell>
              <TableCell style={{width:"45px"}}>Faul</TableCell>
              <TableCell>Ofsayt</TableCell>
              <TableCell>Sarı Kart</TableCell>
              <TableCell>Kırmızı Kart</TableCell>
              
              {/* <TableCell>Anlatan</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="left">{data.season} </TableCell>
                <TableCell align="left">{data.gameWeek}</TableCell>
                <TableCell align="left"><img style={{width:"20px"}} src={url+data.homeImage} alt="" /> {data.homeName}  </TableCell>
                <TableCell align="left"><img style={{width:"20px"}} src={url+data.awayImage} alt="" /> {data.awayName} </TableCell>
                <TableCell align="left">{data.stadiumName}</TableCell>
                <TableCell align="left">{data.htGoalsTeamA}- {data.htGoalsTeamB}</TableCell>
                <TableCell align="left">{data.homegoalcount} - {data.awaygoalcount}</TableCell>
                <TableCell align="left">{data.teamACorners} - {data.teamBCorners}</TableCell>
                <TableCell align="left">{data.teamAFouls} - {data.teamBFouls}</TableCell>
                <TableCell align="left">{data.teamAOffsides} - {data.teamBOffsides}</TableCell>
                <TableCell align="left">{data.teamAYellowCards} - {data.teamBYellowCards}</TableCell>
                <TableCell align="left">{data.teamARedCards} - {data.teamBRedCards}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
