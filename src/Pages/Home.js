import * as React from "react";
//Views
import NftAppBar from "../Views/NftAppBar";
import AppFooter from "../Views/AppFooter";
import NftHero from "../Views/NftHero";
import NftValues from "../Views/NftValues";
import NftCategories from "../Views/NftCategories";
import NftHowItWorks from "../Views/NftHowItWorks";
import NftHero2 from "../Views/NftHero2";
// Components
import withRoot from "../Components/withRoot";

function Home() {
  return (
    <React.Fragment>
      <NftAppBar />
      <NftHero />
      <NftValues />
      <NftCategories />
      <NftHowItWorks />
      <NftHero2 />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);