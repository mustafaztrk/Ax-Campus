import React, { useState } from "react";
import Search from "../pages/Search.jsx";
import ActivitiList from "../pages/ActivitiesList.jsx";

import { Grid, Image, Segment } from "semantic-ui-react";
export default function Home() {
  const src = "https://blog.obilet.com/wp-content/uploads/2018/05/kamp.jpg";

  const customColor = {
    backgroundColor: "#A6ACAF",
    color: "white",
  };

  return (
    <div>
  
      <Grid columns="equal">
      <Grid.Row stretched>
          <Grid.Column>
          
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>   <Search /></Segment>
          </Grid.Column>
        </Grid.Row>
        <ActivitiList />
      </Grid>
    </div>
  );
}
