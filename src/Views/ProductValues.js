import * as React from "react";
//Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//Components
import Typography from "../Components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/img/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="/static/img/art.png" alt="nftart" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Top Quality NFT Designs
              </Typography>
              <Typography variant="h5">
                {
                  "Our designs are made with the highest quality materials and are handcrafted by our team of artists."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="/static/img/erotic.png" alt="erotic" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                XXX Section
              </Typography>
              <Typography variant="h5">
                {
                  "We Offer XXX NFT's for sale as well just head over to our XXX section and verify your age to see our top XXX NFT's."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="/static/img/opensea2.png" alt="opensea" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                We are on OpenSea
              </Typography>
              <Typography variant="h5">
                {
                  "Head over to our OpenSea page to see our NFT's for purchase on the blockchain."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
