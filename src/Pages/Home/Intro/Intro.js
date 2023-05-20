import React from "react";
// import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography";
// import Stack from '@mui/material/Stack';
import Android from "../downloadLink/google_play_badge.png";
import AppStore from "../downloadLink/app_play_badge.png";
// import styled from '@emotion/styled';
import "./Intro.css";
import "../../../Global Css/Main.css";
// import introImg from './intorImage2.png'
// import introImgMobile from './intorImage.png'
import { Grid } from "@mui/material";
function Intro() {

  const textStyling = {
    display:"flex",
    justifyContent:"center",
  }
  const MainText = {
    fontFamily: "var(--fontfamily)",
    fontSize: "4rem",
    wordWrap: "break-word",
    color: "#000",
    fontWeight: "700",
    lineHeight:"5.5rem",
    padding:{xs:"5rem 0 0 0",md:0}

  };

  const captionText = {
    fontFamily: "var(--fontfamily)",
    fontSize: "1.4rem",
    wordWrap: "break-word",
    color: "#000",
    fontWeight: "500",
  };

  const coloringText = {
    color:"var(--backGMain)", }

  return (
    <Grid
      container
      width={1}
      sx={{
        minHeight: {xs:"60vh",sm:"57vh",lg:"80vh"},
        backgroundColor: "var(--backGround1)",
        padding: {sm:"5rem 0 0.5rem 0",md:"6rem 0 2rem 0"},
      }}
    >
      <Grid item xs={12} sm={8} md={4} sx={{...textStyling}}>

        <Grid container maxWidth={"false"} spacing={2} sx={{padding:{md:"2rem",xs:"1rem"}}}>

          <Grid item width={1}  sx={{display:"grid",placeItems:{xs:"center",md:"flex-end normal"}}}>
          <Typography component={"div"} sx={{ ...MainText, }}>
          SHOPPING MADE <span style={{...coloringText}}>SOCIAL</span> 
        </Typography >
        <Typography component={"div"} sx={{ ...captionText }}>
          India's 1st true Social E-Commerce marketplace
          India's 1st true Social E-Commerce marketplace
          India's 1st true Social E-Commerce marketplace
        </Typography>

          </Grid>
         
          <Grid item width={1} sx={{display:"grid",placeItems:"end",}}>
          <Box
          sx={{
            background: "transparent",
            textAlign:"left",
            // paddingLeft:"1.75rem",
            display: "block",
            overflow:"hidden",
            position:"relative",
            bottom:0,

          }}
        >
          <a href="https://play.google.com/store/apps/details?id=com.jarks.sociofieds" target="_blank" rel="noreferrer" >
            <img
              src={Android}
              alt="Android Sociofieds"
              className="for-badges"
            />
          </a>
          <a href="https://apps.apple.com/us/app/id1625834555/id1625834555" target="_blank" rel="noreferrer">
            <img
              src={AppStore}
              alt="Android Sociofieds"
              className="for-badges"
            />
          </a>
        </Box>
          </Grid>
        </Grid>
       
       
      </Grid>
      {/* Right side */}

      <Grid item md={5} className="BackGroundIntro1" sx={{display:{sm:"none",md:"block"}}}>


      </Grid>
      <Grid item md={3} className="BackGroundIntro1-second" sx={{display:{sm:"none",md:"block"}}}>


      </Grid>

      <Grid item sm={4} className="BackGroundIntro2" sx={{display:{xs:"none",sm:"block",md:"none"}}}>


      </Grid>
      <Grid item xs={12} className="BackGroundIntro3" sx={{display:{xs:"block",sm:"none",md:"none"},height:"35vh",marginTop:"2rem"}}>


      </Grid>

{/*       
      <Grid
        item
        sx={{
          width: { md: "42%", xs: "100%", sm: "40%" },
          height: { xs: "20rem", sm: "10rem",md:"auto" },
          margin: "2rem 0",
          zIndex: { xs: "1" },
        }}
        className="BackGroundIntro"
        >
      </Grid>
      <Grid
        item
        sx={{ width: { md: "25%", sm: "0%" } }}
        className="BackGroundIntroPhone"
      ></Grid> */}
    </Grid>

    
  );
}

export default Intro;
