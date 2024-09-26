import { Grid, Grid2 } from "@mui/material";
import React from "react";

export default function Center(props){
  return(
    <Grid2 container
    direction="column"
    alignItems="Center"
    justifyContent="Center"
    sx={{minHeight:'100vh'}}>
      <Grid2 item xs={1}>
        {props.children}
      </Grid2>
    </Grid2>
  )
}