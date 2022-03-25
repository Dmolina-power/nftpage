import * as React from "react";
//Components
import Typography from "../Components/Typography";
//Views
import AppHeroLayout from "./AppHeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1559485349-611282a3df20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnNmd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=80";

export default function XxxHero() {
  return (
    <AppHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
       NSFW NFT ZONE
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Come check out our XXX Collection!
      </Typography>

      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience of premium XXX NFT's
      </Typography>
    </AppHeroLayout>
  );
}
