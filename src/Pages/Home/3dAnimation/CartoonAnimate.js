import { Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect } from "react";
import "./CartoonAnimate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../Global Css/Main.css";
import shopImg from "./images/funny-illustration-3d-cartoon-backpacker - Edited.png";
import postImg from "./images/funny-3d-asian-teenager - Edited.png";
import earnImg from "./images/cwok_casual_58 - Edited.png";

const CartoonAnimate = () => {
  const paraStyle = {
    fontFamily: "var(--fontfamily)",
    fontSize: "1.5rem",
    fontWeight: 1000,
    padding: {
      xs: 0,
      md: "0 0 0 0",
    },
  };

  useEffect(() => {
    AOS.init({
      offset: 40,
      duration: 800,
      easing: "ease-in-quad",
      delay: 100,
      disable: "mobile",
      once: true,
    });
  }, []);

  return (
    <Box
      component={"div"}
      height="auto"
      width={1}
      color="var(--text)"
      textAlign="center"
      overflow={"hidden"}
      sx={{ backgroundImage: "var(--backGround3dGradient)" }}
    >
      <Grid container width={1} textAlign="center" justifyContent={"center"}>
        <Typography
          component={"h1"}
          fontFamily={"var(--fontfamily)"}
          padding="100px 0"
          maxWidth={"750px"}
          fontWeight={1000}
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
            lineHeight: { xs: "2rem", md: "4rem" },
          }}
        >
          but that’s not all. there’s so much Endless you get.
        </Typography>
      </Grid>

      <Grid
        container
        width={1}
        bgcolor="var(--backGround3dGradient)"
        className="outerparent"
      >
        <Grid
          item
          sx={{ width: { xs: "100%", md: "50%" } }}
          className="innerparent"
          textAlign={"center"}
        >
          <Typography
            component={"div"}
            className="img-div"
            data-aos="zoom-in-up"
            width="30%"
          >
            <img src={shopImg} alt="" width="150%" className="main-image" />
            {/* for pc */}
            <Typography
              component={"p"}
              sx={{
                ...paraStyle,
                display: { xs: "none", sm: "none", lg: "block" },
                textAlign: "end",
                marginTop: "1rem",
              }}
            >
              Endless Shopping
            </Typography>
          </Typography>
          {/* for mobile */}
          <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "none", sm: "block", lg: "none" },
              margin: 0,
              position: "relative",
              top: "50%",
            }}
          >
            Endless Shopping
          </Typography>

          <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "inline-block", sm: "none", lg: "none" },
              margin: 0,
            }}
          >
            Endless Shopping
          </Typography>
        </Grid>

        <Grid
          item
          sx={{ width: { xs: "100%", md: "50%" } }}
          className="innerparent"
          textAlign={"center"}
        >
          <Typography
            component={"div"}
            className="img-div"
            data-aos="zoom-in-up"
            width="30%"
          >
            <img
              src={postImg}
              alt=""
              width="95%"
              className="main-image"
            />
            {/* for pc */}
            <Typography
              component={"p"}
              sx={{
                ...paraStyle,
                display: { xs: "none", sm: "none", lg: "block" },
                textAlign: "center",
              }}
            >
              Endless Content
            </Typography>
          </Typography>
          {/* for mobile */}
          <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "none", sm: "block", lg: "none" },
              margin: 0,
              position: "relative",
              top: "50%",
            }}
          >
            Endless Content
          </Typography>

          <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "inline-block", sm: "none", lg: "none" },
              margin: 0,
            }}
          >
            Endless Content
          </Typography>
        </Grid>
      </Grid>

     

      <Grid
        container
        width={1}
        bgcolor="var(--backGround3dGradient)"
        className="outerparent"
        textAlign={"center"}
        paddingTop={8}
      >
        <Grid item sx={{ width: { md: "0", lg: "35%" }}}></Grid>
        <Grid item sx={{ width: { md: "0", lg: "31%" }}}>
        <Box component={"div"} data-aos="zoom-in-up">
            <img
              src={earnImg}
              alt=""
              width="100%"
              className="earn-img"
            />
            <Typography
              component={"div"}
              sx={{
                ...paraStyle,
                display: { xs: "none", md: "none", lg: "flex" },
                textAlign: "center",
                justifyContent:"center",
                alignItems:"center",
              }}
            >
              Endless money
            </Typography>
            <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "none", md: "block", lg: "none" },
              margin: 0,
            }}
          >
            Endless money
          </Typography>
          <Typography
            component={"p"}
            sx={{
              ...paraStyle,
              display: { xs: "block", md: "none", lg: "none" },
              margin: 0,
            }}
          >
            Endless money
          </Typography>
          </Box>

        </Grid>
        <Grid item sx={{ width: { md: "0", lg: "35" } }} ></Grid>

      </Grid>

      <Grid
        container
        width={1}
        textAlign="center"
        justifyContent={"center"}
        bgcolor="var(--backGround3dGradient)"
      >
        <Typography
          component={"p"}
          fontFamily={"var(--fontfamily)"}
          padding="7rem 0"
          maxWidth={"750px"}
          fontWeight={1000}
          data-aos="zoom-in-up"
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
            lineHeight: { xs: "1.8rem", md: "4rem" },
          }}
        >
          Earning become easy as much as like making a 'maggie' get Endless
          reward & money as you want.
        </Typography>
      </Grid>
    </Box>
  );
};

export default CartoonAnimate;
