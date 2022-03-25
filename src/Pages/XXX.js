import * as React from "react";
//Views
import XxxAppBar from "../Views/XxxAppBar";
import AppFooter from "../Views/AppFooter";
import XxxHero from "../Views/XxxHero";
import XxxCategories from "../Views/XxxCategories";
import NftHero2 from "../Views/NftHero2";
// Components
import withRoot from "../Components/withRoot";

function Xxx() {
  return (
    <React.Fragment>
      <XxxAppBar />
      <XxxHero />
      <XxxCategories />
      <NftHero2 />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Xxx);
