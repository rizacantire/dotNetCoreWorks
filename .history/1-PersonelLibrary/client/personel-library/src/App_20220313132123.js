import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";
import { Container } from '@chakra-ui/react'

export default function App() {
  return (
    <Container>
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
      <Header />
        
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem colSpan={1} >
          <SideNavi />
        </GridItem>
        <GridItem colSpan={5} >
        <Dashboard />
        </GridItem>
        
      </Grid></Container>
    
  );
}
