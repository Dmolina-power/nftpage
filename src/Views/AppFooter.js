import * as React from "react";
//Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
//Components
import Typography from "../Components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="#">
        D&L's Designs
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.dark" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://opensea.io/Danny-Lindsay_Creations" sx={iconStyle}>
                  <img src="/static/img/opensea.png" alt="OpenSea" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Privacy</Link>
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {"Top"}
            </Link>
          </Box>
        </Grid>
      </Container>
    </Typography>
  );
}
