import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="100" bg="blue.500" />
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={10}>
      <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </div>
  );
}
