import { Grid, Rating, styled, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./AboutIndex.css";
import Navbar2 from './AboutNavbar/Navbar2'
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import "../../Global Css/Main.css";

const AboutIndex = () => {
  const CustomButton = styled("button")(({ theme }) => ({
    padding: "1rem 4rem",
    color: "var(--text)",
    fontWeight: 600,
    fontFamily: "var(--fontfamily)",
    border: "none",
    background: "#000",
    textTransform: "uppercase",
    borderRadius: "0.7rem",
    cursor: "pointer",
    transition: "all 0.3s linear",
    "&:hover": {
      background: "grey",
    },
  }));


  return (
    <>
      <Navbar2 />
      <Box
        width={"100%"}
        height="fit-content"
        className="parent-container background-container"
        textAlign={"center"}
        overflowX={"hidden"}
        padding={"7rem 0 0 0"}

      >
        {/* <Typography
        component="div"
        fontFamily={"playlistscriptwebfont"}
        fontWeight={"500"}
        fontSize="3rem"
        padding={"0 0 0 0"}
        color="var(--text)"
      >
        Sociofieds
      </Typography> */}

        <Typography
          component="div"
          fontFamily={"var(--fontfamily)"}
          fontWeight={"700"}
          fontSize="4.75rem"

          color="var(--btnColor)"
        >
          Shopping Made Social
        </Typography>

        <Typography
          component="div"
          fontFamily={"var(--fontfamily)"}
          fontWeight={"600"}
          fontSize="1.4rem"
          textAlign={"center"}
          padding="3rem 0"
          color="var(--mainTxt)"
        >
          Over more than 5000+ people use Sociofieds to get updated when <br />{" "}
          their favorite styles go on sale.
        </Typography>

        <Typography component={"div"} width={1}>
          <a
            href="https://sociofiedsapp.app.link/install"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <CustomButton>get the app !</CustomButton>
          </a>
        </Typography>

        {/* <Typography component={"div"} className="background-container"> */}
        {/* background image */}
        {/* </Typography> */}

        <Grid
          container
          width={1}
          justifyContent={"center"}
          textAlign="center"
          padding={"2rem 0"}
          color="var(--text)"
        >
          <Box component={"div"}>
            <AutoAwesomeOutlinedIcon
              sx={{ position: "relative", display: "list-item", left: "-1rem", color: "rgba(115,-48,167)" }}
            ></AutoAwesomeOutlinedIcon>
            <Grid
              item
              bgcolor={"rgba(115,-48,167)"}
              borderRadius="1rem"
              height={"100px"}
              width={"20rem"}
              fontFamily="--fontfamily"
              fontSize={"0.9rem"}
            >
              <Typography
                component={"span"}
                color={"#ffb700"}
                fontFamily="tahoma"
                fontSize={"2rem"}
                fontWeight={"700"}
              >
                4.9
              </Typography>
              <Rating
                component="div"
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <Typography component={"div"} fontWeight={"700"} color={"var(--text)"}>
                Trust of more than 5000+ users
              </Typography>
            </Grid>
            <AutoAwesomeOutlinedIcon
              sx={{
                position: "relative",
                display: "list-item",
                left: "20rem",
                top: "-1rem",
                color: "rgba(115,-48,167)"
              }}
            ></AutoAwesomeOutlinedIcon>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default AboutIndex;
