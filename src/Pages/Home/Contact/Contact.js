import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../../Global Css/Main.css";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0rt5l95",
        "template_hc8m5lr",
        form.current,
        "vX1bK-IsH8HC6qXT9"
      )
      .then(
        (result) => {
          alert(result.text);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const widthProp = {
    sm: "100%",
    md: "100%",
    textWidth: {
      md: "40%",
      sm: "100%",
    },
  };
  let textWidthSm = widthProp.textWidth.sm;
  let textWidthmd = widthProp.textWidth.md;
  let FieldColor = { backgroundColor: "var(--text)" };

  const TextAreaStyle = styled("textarea")(({ theme }) => ({
    border: "1px solid black",
    width: "91%",
    backgroundColor: "#f8f8f8",
    flexGrow: 1,
    height: "10rem",
    borderRadius: 2,
    padding: "1rem",
    fontfamily: "var(--fontfamily)",

    "&:focus": {
      border: "none",
      outline: "none",
      boxShadow: "0px 2px 20px 10px rgba(215, 254, 247, 0.839) inset",
      fontWeight: "500",
      fontSize: "1rem",
    },
  }));

  const CustomDiv = styled("div")(({ theme }) => ({
    border: "2px solid #fff",
    color: "var(--text)",
    borderRadius: "50%",
    padding: "0.4rem 0.4rem 0.2rem 0.4rem",
    alignItems: "center",
  }));

  const forSocialMediaTag = {
    textDecoration: "none",
    color: "var(--text)",
  };

  const forHover = {
    transition: "all 0.2s linear",
    "&:hover": {
      color: "var(--backGMain)",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        padding: { xs: 0, md: "0 0 0 2rem" },
        bgcolor: "#000",
        fontFamily: "var(--fontfamily)",
      }}
    >
      <Grid container sx={{ width: 1,padding:"4rem 0" }} >
        <Grid item width={1}>
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "1.4rem", md: "2.4rem" },
              padding: "1rem 0 0 1rem",
              color: "var(--text)",
              fontFamily: "var(--fontfamily)",
            }}
            gutterBottom
            fontWeight="bolder"
            textAlign="left"
          >
            Are You a Brand?
          </Typography>
        </Grid>
        <Grid
          item
          width={1}
          sx={{
            textAlign: "left",
            padding: "0.8rem 1rem 2rem 1rem",
            display: { xs: "block", md: "block" },
          }}
        >
          <Divider sx={{ bgcolor: "grey", height: "0.5rem", width: "10rem" }} />
        </Grid>

        <Grid item width={1} sx={{ padding: { xs: "1rem 1rem", md: "1rem" } }}>
          <Typography variant="p" fontWeight={"bold"} color="var(--text)">
            Please fill out the form below and our team will reach out to you.
          </Typography>
        </Grid>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="formStyling"
          id="contactUs"
         
        >
          <Grid
            container
            sx={{ width: 1 }}
            padding={1}
            direction={"row"}
            gap={2}
          >
            <Grid item sx={{ width: { xs: textWidthSm, lg: textWidthmd } }}>
              <TextField
                label="Brand Name"
                variant="filled"
                name="brand_name"
                sx={{ width: 1, bgcolor: "var(--text)" }}
                required
              />
            </Grid>
            <Grid item sx={{ width: { xs: textWidthSm, lg: textWidthmd } }}>
              <TextField
                label="Email"
                variant="filled"
                name="email"
                sx={{ width: 1 }}
                style={FieldColor}
                required
              />
            </Grid>
            <Grid item sx={{ width: { xs: textWidthSm, lg: textWidthmd } }}>
              <TextField
                 type="number"
                label="Phone Number"
                variant="filled"
                name="phone_no."
                sx={{ width: 1 }}
                style={FieldColor}
                required
              />
            </Grid>
            <Grid item sx={{ width: { xs: textWidthSm, lg: textWidthmd } }}>
              <TextField
                label="Website"
                variant="filled"
                name="website_name"
                sx={{ width: 1 }}
                style={FieldColor}
                required
              />
            </Grid>
            <Grid item sx={{ width: { xs: "100%", md: 1,lg:"89.5%" } }}>
              <TextAreaStyle placeholder="Enter Message Here" />
            </Grid>

            <Grid item padding={2}>
              <input type="submit" value={"Join Us"} className="ButtonStyle" />
            </Grid>
          </Grid>
        </form>
        {/* contact info */}
        <Grid
          container
          sx={{
            width: { sm: "100%", lg: "30%" },
            padding: { xs: "0 0 0 2rem", md: "4rem" },
          }}
          direction="column"
          color="var(--text)"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4">Contact us</Typography>
          </Grid>
          <Grid item padding="1.5rem 0">
            <Grid
              container
              direction="row"
              gap={5}
              sx={{ padding: { md: "1rem 0",xs:"0.5rem 0" }, margin: 0, fontSize: {xs:"1.2rem",md:"1.5rem"} }}
            >
              <PermPhoneMsgIcon />
              <Typography
                variant="p"
                sx={{ letterSpacing: 1, margin: "0 0 0 -2rem" }}
              >
                Phone
              </Typography>
            </Grid>
            <Typography
              variant="p"
              sx={{
                letterSpacing: 1,
                cursor: "pointer",
                fontSize: {xs:"1.2rem",md:"1.5rem"}
              }}
            >
              <a
                href="tel:+91 9289693339"
                style={{ textDecoration: "none", color: "var(--text)" }}
              >
                +91 9289693339
              </a>
            </Typography>
          </Grid>

          <Grid item padding="1.5rem 0">
            <Grid
              container
              direction="row"
              gap={5}
              sx={{ fontSize: {xs:"1.2rem",md:"1.5rem"},padding:{xs:"0.5rem 0"} }}
            >
              <EmailIcon />
              <Typography
                variant="p"
                sx={{ letterSpacing: 1, margin: "0 0 0 -2rem" }}
              >
                Message
              </Typography>
            </Grid>
            <Typography
              variant="p"
              sx={{
                letterSpacing: 1,
                padding: "0 0 0 0",
                fontSize: {xs:"1.2rem",md:"1.5rem"}
              }}
            >
              contact@sociofieds.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ width: "100%", padding: "2rem 0" }}>
        <Grid item sx={{ width: "40%" }}></Grid>
        <Grid
          item
          sx={{ width: "20%", display: "flex" }}
          justifyContent="space-around"
        >
          <CustomDiv>
            <a
              href="https://www.facebook.com/sociofieds"
              target="_blank"
              rel="noreferrer"
              style={{ ...forSocialMediaTag }}
            >
              <FacebookIcon sx={{ ...forHover }} />
            </a>
          </CustomDiv>

          <CustomDiv>
            <a
              href="https://www.instagram.com/sociofieds/"
              target="_blank"
              rel="noreferrer"
              style={{ ...forSocialMediaTag }}
            >
              <InstagramIcon sx={{ ...forHover }} />
            </a>
          </CustomDiv>

          <CustomDiv>
            <a
              href="https://www.linkedin.com/company/sociofieds/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              style={{ ...forSocialMediaTag }}
            >
              <LinkedInIcon sx={{ ...forHover }} />
            </a>
          </CustomDiv>
        </Grid>
        <Grid item sx={{ width: "40%" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
