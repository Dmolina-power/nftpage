import * as React from "react";
//Material UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
//Components
import Typography from "../Components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    title: "ART",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    title: "ART",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101447830-faca4003f680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101810684-138e2b7ff529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101447864-1761ac8414cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "24%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101808019-34feab61ea6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101807331-21a4a3f081d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1643101809754-43a91784ebec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ART",
    width: "40%",
  },
];

export default function NftCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
       NFT Gallery
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
