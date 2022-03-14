import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <div>
      <Grid templateColumns='repeat(6, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid>
    </div>
  );
}
