import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import sandeepImg from "./image/SandeepImage.png";
import RahulImg from "./image/RahulImage.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../../Global Css/Main.css";

const FounderIndex = () => {
  return (
    <Box
      sx={{
        width: 1,
        bgcolor: "var(--text)",
        padding: { xs: "0 auto", md: "4rem 0 2rem 0" },
        height: "fit-content",
        textAlign: "center",
        fontFamily:"var(--fontfamily)",
       
      }}

      id="herosection"
    >
      <Grid container textAlign={"center"}>

      <Grid item width={1}>
      <Typography
        sx={{ fontSize: { xs: "2rem", md: "3.4rem" } }}
        fontWeight="bolder"
        textAlign="center"
        fontFamily="'Mulish',sans-serif"
      >
        Meet The Team
      </Typography>
      </Grid>

      <Grid item width={1}  display={"flex"} justifyContent={"center"}>
      <Divider
          sx={{
            bgcolor: "var(--dividerColor)",
            height: "0.5rem",
            width: { xs: "10rem", md: "20rem" },
          }}
        />
      </Grid>
      </Grid>


      <Grid
        container
        sx={{
          textAlign: "center",
          justifyContent: "space-around",
          padding: { xs: "2rem 0 0 0", md: "1rem 0 3rem 0" },
        }}
      >
        {/* 1st  */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" >
        <Card
          
          variant="outlined"
          sx={{
            maxWidth: 250,
            border: "none",
            borderRadius:"8rem 8rem 0 0",
            padding: "0.3rem 0.1rem",
            height: "fit-content",
            fontFamily:"var(--fontfamily)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "50%" }}
            image={RahulImg}
            title="Rahul Khanna"
          />

          <CardContent>
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "0.7rem ", md: "1.3rem" },
                fontWeight: "bolder",
                fontFamily:"var(--fontfamily)"
              }}
              component="div"
            >
              Rahul Khanna
            </Typography>
            <Typography paragraph>Co-Founder</Typography>
            

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82652100&keywords=sociofieds&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c7fbe94d-0330-4d4b-9bdf-f1c0b94bb8fd&sid=MiT"
                
              >
                <LinkedInIcon color="primary" sx={{transform:"scale(1.5)"}}/>
              </a>
            
          </CardContent>
        </Card>
        </Grid>
        
        {/* 2nd */}

        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" >
        <Card
          variant="outlined"
          sx={{
            maxWidth: 250,
            padding: "0.3rem 0.1rem",
            height: "fit-content",
            border:"none",
            fontFamily:"var(--fontfamily)",
            borderRadius:"8rem 8rem 0 0",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "50%",borderRadius:"9rem" }}
            image={sandeepImg}
            title="Sandeep chauhan"
          />

          <CardContent>
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "0.7rem ", md: "1.2rem" },
                fontWeight: "bolder",
              }}
              component="div"
            >
              Sandeep Chauhan
            </Typography>
            <Typography paragraph>Co-Founder</Typography>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82652100&keywords=sociofieds&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c7fbe94d-0330-4d4b-9bdf-f1c0b94bb8fd&sid=MiT"
                
              >
                <LinkedInIcon color="primary" sx={{transform:"scale(1.5)"}}/>
              </a>
          </CardContent>
        </Card>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default FounderIndex;
