import "./App.css";
import React from "react";
import { Grid } from "@mui/material";
import SideNavi from "./components/layouts/SideNavi";
import Header from "./components/layouts/Header"
import Dashboard from "./components/layouts/Dashboard";
function App() {
  return (
    <div style={{maxWidth:"1600px",margin:"auto"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>

        <Grid item xs={2}>
          <SideNavi/>
        </Grid>
        <Grid item xs={10}>
          <Dashboard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
