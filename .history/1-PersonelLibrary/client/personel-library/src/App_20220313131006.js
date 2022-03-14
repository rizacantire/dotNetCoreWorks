import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem bg="tomato" />
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={5} bg="tomato" />
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem colSpan={5} bg="tomato" />
        <GridItem colSpan={5} bg="tomato" />
      </Grid>
    </div>
  );
}
