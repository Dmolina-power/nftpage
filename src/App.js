import * as React from "react";
//Views
import AppAppBar from "./Views/AppAppBar";
import AppFooter from "./Views/AppFooter";
import ProductHero from "./Views/ProductHero";
import ProductValues from "./Views/ProductValues";
// Components
import withRoot from "./Components/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
