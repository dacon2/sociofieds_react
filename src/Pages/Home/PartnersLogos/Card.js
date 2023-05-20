import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, Paper, Tooltip } from "@mui/material";
import { Grid } from "@material-ui/core";
import '../../../Global Css/Main.css'
const CardElement = (props) => {


  return (

    <Tooltip title={props.title} arrow>
    <Box component={"div"}>
     
      <Grid container display={"block"}>

        <Grid item display="flex" justifyContent={"center"}>
      <CardMedia
      component="img"
      sx={{ 
        borderRadius:"10rem",
        width: {xs:1/2,md:"60%"}}}
      image={props.image}
      
      />
        </Grid>

        <Grid item>
        <Paper
        component={"p"}
        elevation={0}
        sx={{
          margin: "1.4rem 0",
          fontWeight: { xs: "auto", md: "700" },
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: "grey",
          textAlign: "center",
          fontFamily:"var(--fontfamily)"
        }}
      >
        {props.name}
      </Paper>
        </Grid>
      </Grid>
     
      
    </Box>
    </Tooltip>
  );
};

export default CardElement;
