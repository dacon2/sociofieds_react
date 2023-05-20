// import logoMain from "./image/sociofieds main.png";
import "./Navbar.css";
import "../../Global Css/Main.css";
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

const setHow = () =>{
  setState({
    clicked: !state.clicked,
  })
  window.scrollTo(0,700)
}
const setBrands = () =>{
  setState({
    clicked: !state.clicked,
  })
  window.scrollTo(0,2940)
}

const setTeam = () =>{
  setState({
    clicked: !state.clicked,
  })
  window.scrollTo(0,4200)
}
  function handleScroll() {

    if(window.pageYOffset > 100){
      let currentPosition = window.pageYOffset;

      setVisible(prevPosition > currentPosition || currentPosition < 10);
  
      setPrevposition(currentPosition);
    }
   
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, visible, prevPosition]);

  
  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: " space-around",
          background: "var(--backGMain)",
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
    {/* <a href='https://sociofieds.com'> 
      <img 
      src={logoMain} 
      alt="" 
      style={{maxWidth:"300px",maxHeight:"15rem",margin:'0 0 0 2rem',clip: "rect(75px,260px,155px,60px)",position:"absolute",top:"-75px"}} className="forImg"/>
    </a> */}
            Sociofieds
          </Typography>
        </Link>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <List
            id="navbar"
            className={state.clicked ? "#navbar active" : "#navbar"}
            fontFamily={"var(--fontfamily)"}
          >
            <ListItem>
              <ListItemButton >
                <Link to="/aboutus">
                  <ListItemText primary="About"/>
                </Link>
              </ListItemButton>
            </ListItem>
           
            <ListItem>
              <ListItemButton>
                <Link>
                  <ListItemText primary="Brands" onClick={()=>{
                    const anchorTag = document.querySelector('#partner_brands')
                    anchorTag.scrollIntoView({behavior:"smooth",block:"center"})

                    setState({
                      clicked: !state.clicked,
                    })
                  }}/>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link>
                  <ListItemText primary="Team"  onClick={()=>{
                    const anchorTag = document.querySelector('#herosection')
                    anchorTag.scrollIntoView({behavior:"smooth",block:"center"})

                    setState({
                      clicked: !state.clicked,
                    })
                  }}/>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>

        <Box component="div" id="mobile">
          <button
            onClick={handleClick}
            className={`hamburger hamburger--emphatic ${
              state.clicked ? "is-active" : ""
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </Box>
      </Box>
    
  );
};

export default Navbar;
