import React from "react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";
import { Grid } from "semantic-ui-react";

export default function App() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <SideNavi/>
        </Grid.Column>
        <Grid.Column width={13}>
          <Dashboard/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
