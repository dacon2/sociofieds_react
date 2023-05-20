import Data from "./Data";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardElement from "./Card";
import Button from "@mui/material/Button";
import "../../../Global Css/Main.css";
import axios from "axios";
import {useEffect, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SliderLogo() {
  const arrowButtonPrev = {
    height: {xs:"3rem",md:"10rem",},
    width: {xs:"2rem",md:"4rem"},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:"white",
    zIndex: 2,
    cursor:"pointer",
    fontSize: "5rem",
    top: {xs:"3.5rem",md:"2rem"},
    position:"relative",
    borderRadius: "0 7px 7px 0",
    padding:"0 0 0 0.8rem",
    color:"var(--arrowColor)",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const arrowButtonNext = {
    height: {xs:"3rem",md:"10rem",},
    width: {xs:"2rem",md:"4rem"},
    background:"white",
    zIndex: 2,
    cursor:"pointer",
    fontSize: "4rem",
    borderRadius: "7px 0 0 7px",
    top: {xs:"0.5rem",md:"-7.7rem"},
    position: "relative",
    marginLeft: "auto",
    marginRight: 0,
    justifyContent: "flex-end",
    display: "flex",
    padding:"0 0 0 0.8rem",
    color:"var(--arrowColor)",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },{
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      }
      ,{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        bgcolor: "var(--text)",
        padding: "4rem 0",
        height: "auto",
        fontFamily: "var(--fontfamily)",
      }}

      id="partner_brands"
    >
      <Typography
        sx={{ fontSize: { xs: "2rem", md: "3.4rem" } }}
        gutterBottom
        fontWeight="bolder"
        textAlign="center"
      >
        Our Partner Brands
      </Typography>

      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Divider
          sx={{
            bgcolor: "var(--dividerColor)",
            height: "0.5rem",
            width: { xs: "10rem", md: "20rem" },
          }}
        />
      </Grid>

        <Grid container sx={{
          margin: 0,
          overflow: "hidden",
          padding: { xs: "1rem 0", md:"1.75rem 0" },
          height:{xs:"44.5vh",sm:"31vh",md:"50vh",xl:"50vh"},
          display:"block",
        }}>

          <Box component={"div"} height="2rem">

          <ArrowBackIosIcon
            onClick={() => sliderRef.current.slickPrev()}
            sx={{ ...arrowButtonPrev}}
          ></ArrowBackIosIcon>
          <ArrowForwardIosIcon
            onClick={() => sliderRef.current.slickNext()}
            sx={{ ...arrowButtonNext }}
          />
          </Box>
         
          <Slider {...settings} ref={sliderRef}>
            {Data.map((value, item) => (
            <CardElement image={value.brandLogo.imageUrl} name={value.brandName} title={value.brandName} key={item} />
            ))}
          </Slider>
          

          </Grid>
     
      <Grid item textAlign="center" margin="2rem 0 0 0">
        <Button color="secondary" variant="outlined" onClick={()=>{

          const anchorTag = document.querySelector('#contactUs')
          anchorTag.scrollIntoView({behavior:"smooth",block:"center"})

        }}>
          Want to partner
        </Button>
      </Grid>
    </Box>
  );
}

export default SliderLogo;
