import React, { useState, useEffect } from "react";
import {
  commentatorList,
  getCommentatorAsync,
} from "../../redux/reduce/commentatorSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import {
  getStatisticsAsync,
  statisticList,
} from "../../redux/reduce/statisticsSlice";
export default function CommentatorStatistics() {
  const dispatch = useDispatch();
  const getCommentators = useSelector(commentatorList);
  const getStatisticList = useSelector(statisticList);
  const [value, setValue] = useState("");
  const [totalMatch, setTotalMatch] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
   
  };
  console.log(value);
 
  useEffect(() => {
    dispatch(getCommentatorAsync());
    dispatch(getStatisticsAsync(value));
  }, [dispatch]);
  const getDetails = () => {
    dispatch(getStatisticsAsync(value));
    
    //console.log(getStatisticList.counts.length);
    //console.log(getStatisticList.length>0?getStatisticList.counts.length>0?getStatisticList.counts[0].teamName:"":"");
    //console.log(getStatisticList);
    //console.log(getStatisticList.counts.length>0?"a":"b");
    //console.log(getStatisticList.totalMostGoals[0].matchs.map(p=>p.matchHomeName));
    
  };
  return (
    <div>
      <Select
        defaultValue=""
        size={"small"}
        onChange={handleChange}
        style={{ margin: "auto 25em" }}
      >
        <MenuItem value="">
          {" "}
          <em>None</em>
        </MenuItem>
        {getCommentators.map((s) => (
          <MenuItem key={s.id} value={s.id}>
            {s.firstName} {s.lastName}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      {/* <Button
        variant="contained"
        style={{ margin: "auto 31em" }}
        onClick={getDetails}
      >
        Getir
      </Button> */}
      <br />
      <br />
      <Grid sx={{bgcolor:"#EBF9DA"}} container>
        <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200,minHeight:112,bgcolor:"#FFD365"  }} >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Maç
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {getStatisticList.totalMatch}
              </Typography>
            </CardContent>
          </Card><br/>
          <br></br>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200,bgcolor:"#FFD365"  }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Gol
              </Typography>
              <Typography variant="body1">{getStatisticList.totalGoal}</Typography>
            </CardContent>
          </Card><br/>
          <br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200,bgcolor:"#FFD365" }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Kırmızı Kart
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalRedCard}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Sarı Kart
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalYellowCard}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ev Sahibi Galibiyet
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalHomeWin}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 220 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Deplasman Galibiyet
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalAwayWin}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Beraberlik
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalDraw}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ev Sahibi Gol
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalHomeGoal}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ maxWidth: 200 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Deplasman Gol
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalAwayGoal}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
        <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ minWidth: 350 ,bgcolor:"#FFD365"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                En Gollü Maç
              </Typography>
              <Typography variant="body1">
                {getStatisticList.totalMostGoals !== undefined && getStatisticList.totalMostGoals.length !== 0  ?getStatisticList.totalMostGoals[0].matchs.map((m)=>( 
                 <p>{m.matchHomeName} {m.matchAwayName} {m.matchHomeGoalCount} - {m.matchAwayGoalCount}</p>
                 )):""}
               {/* {getStatisticList.totalMostGoals[0].matchs.map((m)=>( 
                 <p>{m.matchHomeName} {m.matchAwayName} {m.matchHomeGoalCount} - {m.matchAwayGoalCount}</p>
                 ))} */}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
       <Grid sx={{padding:"10px"}}  item xs={3}>
          <Card sx={{ minWidth: 300 ,bgcolor:"#FFD365",marginLeft:"95px"}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                En Çok Maç Anlatılan Takım
              </Typography>
              <Typography variant="body1">
               {getStatisticList.mostTeam!=null?getStatisticList.mostTeam.count+ " " +getStatisticList.mostTeam.teamName:""}
              </Typography>
            </CardContent>
          </Card><br/>
        </Grid>
      </Grid>
    </div>
  );
}
