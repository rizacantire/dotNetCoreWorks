import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideNavi from './components/layouts/SideNavi'
import Dashboard from './components/layouts/Dashboard'

export default function App() {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="100" bg="blue.500" />
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <GridItem>
        <SideNavi/>
      </GridItem>
        <Dashboard/>
      </Grid>
    </div>
  );
}
