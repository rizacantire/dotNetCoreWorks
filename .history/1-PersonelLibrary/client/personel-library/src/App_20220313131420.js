import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";

export default function App() {
  return (
    <div>
      <Grid >
        <Header />
      </Grid>
      <Grid>
        <GridItem>
          <SideNavi />
        </GridItem>
        <Dashboard />
      </Grid>
    </div>
  );
}
