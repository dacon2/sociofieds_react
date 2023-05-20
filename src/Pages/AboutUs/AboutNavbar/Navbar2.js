// import logoMain from "./image/sociofieds main.png";
import "./Navbar2.css";
import "../../../Global Css/Main.css";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [prevPosition, setPrevposition] = useState(0);
  const [visible, setVisible] = useState(true);

  const [state, setState] = useState({ clicked: false });
 

  const handleClick = () => {
    setState({
      clicked: !state.clicked,
    })
  };

  function handleScroll() {
    let currentPosition = window.pageYOffset;

    setVisible(prevPosition > currentPosition || currentPosition < 10);

    setPrevposition(currentPosition);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, visible, prevPosition]);

  
  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          background: "var(--primarybg)",
          boxShadow: "var(--Navshadow)",
          width: "100%",
          top: visible ? "0" : "-100px",
          position: "fixed",
          zIndex: 99,
          transition: "0.4s linear",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            component="div"
            fontFamily={"playlistscriptwebfont"}
            fontWeight={500}
            fontSize="3rem"
            padding={"0 0 0 3rem"}
            color="var(--text)"

            onClick={() =>{
              window.scrollTo(0, 0)
            }}
          >
    
            Sociofieds
          </Typography>
        </Link>

      </Box>
    
  );
};

export default Navbar;
