import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";

export default function App() {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <Header />
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <GridItem>
          <SideNavi colSpan={1}  />
          <Dashboard  colSpan={3}/>
        </GridItem>
        
      </Grid>
    </div>
  );
}
