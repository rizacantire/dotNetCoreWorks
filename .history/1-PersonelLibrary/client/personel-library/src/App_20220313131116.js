import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)" gap={1}>
        <GridItem w="100%" h="100" bg="blue.500" />
       
      </Grid>
    </div>
  );
}
