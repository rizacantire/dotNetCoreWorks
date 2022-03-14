import React from "react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";
import { Button, GridColumn } from "semantic-ui-react";
import { Grid, Image } from "semantic-ui-react";

export default function App() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <SideNavi/>
        </Grid.Column>
        <Grid.Column>
          <Dashboard/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
