import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import blackSociofieds from './Images/Black Sociofieds.png'
import "../../Global Css/Main.css";
import Android from '../../../src/Pages/Home/downloadLink/google_play_badge.png'
import AppStore from '../../../src/Pages/Home/downloadLink/app_play_badge.png'
import './FooterIndex.css'

const FooterIndex = () => {
  const TypoCustom = styled("span")(({ theme }) => ({
    color: "var(--text)",
    textDecoration: "underline",
    lineHeight: "2rem",
    fontFamily: "Tahoma",
    fontWeight: "bold",
    transition:"all 0.2s linear",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      color:"var(--backGMain)"
    },
  }));

  const toZeroYAxis = () =>{
    window.scrollTo(0, 0)
  }

 
  return (
    <Grid
      container
      sx={{ height: "fit-content", overflow: "hidden" }}
      padding={4}
      bgcolor="rgb(66 63 63)"
      color="var(--text)"
    >
      <Grid item xs={12} md={4} padding="0 0 0 1.4rem">
        <Link to='/' style={{textDecoration:"none"}}>
        <Typography
          component="div"
          fontFamily={"playlistscriptwebfont"}
          fontWeight={"500"}
          fontSize="3rem"
          padding={"0 0 0 3rem"}
          color="var(--mainTxt)"
        >
          Sociofieds
        </Typography>
        </Link>
        

        <Grid container>
          <Grid item width={1} textAlign="center" >
            <Typography
              variant="p"
              fontWeight="700"
              fontSize={20}
              paddingTop={3}
              fontFamily={"var(--fontfamily)"}
              
            >
              complete security. no asterisks.
            </Typography>
          </Grid>
          <Grid item width={1} padding={4.8}>
            <Typography
              variant="p"
              fontWeight="100"
              lineHeight={1.3}
              fontFamily={"'Mulish', sans-serif"}
              textAlign="left"
            >
              Your KYC data gets safe here and get 100 coins for free on every
              refer. So, be ready to pick that OFFER's
            </Typography>
          </Grid>

          <Grid
            container
            maxWidth={true}
            sx={{
              display: { md: "none", xs: "inline-block" },
              textAlign: "center",
            }}
          >
            {/* for mobile */}
            <Grid item md={12} margin={2}>
            <a
              href="https://play.google.com/store/apps/details?id=com.jarks.sociofieds"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >

            <img
              src={Android}
              alt="Android Sociofieds"
              
              className="for-footer-badges"
            />

            </a>

            <a
              href="https://apps.apple.com/us/app/id1625834555/id1625834555"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >

            <img
              src={AppStore}
              alt="Android Sociofieds"
           
              className="for-footer-badges"
            />

            </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          textAlign={"center"}
          spacing={2}
          sx={{ display: { xs: "none", md: "inline-block" } }}
          maxWidth={true}
        >
          {/* for pc */}
          <Grid item md={12}>
            <a
              href="https://play.google.com/store/apps/details?id=com.jarks.sociofieds"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >


            <img
              src={Android}
              alt="Android Sociofieds"
              className="for-footer-badges"
            />

            </a>

            <a
              href="https://apps.apple.com/us/app/id1625834555/id1625834555"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >

            <img
              src={AppStore}
              alt="Android Sociofieds"
              className="for-footer-badges"
            />

            </a>
          </Grid>
        </Grid>

        <Grid container width={1}>
          <Grid item width={1 / 2}>
            <Typography
              variant="p"
              display={"block"}
              padding={1}
              width={1}
              color="#9b9b9b"
              fontFamily={"tahoma"}
              fontWeight="800"
            >
              Legalities
            </Typography>
            <Link to='/terms' target='_blank' >
              <TypoCustom onClick={toZeroYAxis}>Terms and Conditions</TypoCustom>
            </Link>
            <br />
            <Link to='/Privacy' target="_blank">
              <TypoCustom onClick={toZeroYAxis}>Privacy Policy</TypoCustom>
            </Link>
          </Grid>

          <Grid item width={1 / 2}>
            <Typography
              variant="p"
              display={"block"}
              padding={1}
              width={1}
              color="#9b9b9b"
              fontFamily={"tahoma"}
              fontWeight="800"
            >
              Learn More
            </Typography>

            <Link >
              <TypoCustom className="diabledButton">Earn More</TypoCustom>
            </Link>
            <br />
            <Link >
              <TypoCustom className="diabledButton">Company</TypoCustom>
            </Link>
            <br />
            <Link>
              <TypoCustom className="diabledButton">About us</TypoCustom>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        width={1}
        sx={{
          padding: "2rem 0 0 0",
          color: "var(--text)",
        }}
      >
        <Grid container spacing={2} width={1}>
          <Grid item textAlign={"center"} width={1}>
            <Divider color="#fff" />
          </Grid>
          <Grid item variant="p" textAlign={"center"} width={1}>
            © ALL RIGHTS RESERVED | Sociofieds.com | Gocrow Solutions Pvt.Ltd.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

//////

export default FooterIndex;
