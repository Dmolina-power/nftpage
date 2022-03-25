import * as React from "react";
//Views
import AppAppBar from "./Views/AppAppBar";
import AppFooter from "./Views/AppFooter";
import ProductHero from "./Views/ProductHero";
// Components
import withRoot from "./Components/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
