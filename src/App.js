import * as React from "react";
//Views
import AppAppBar from "./Views/AppAppBar";
import AppFooter from "./Views/AppFooter";
// Components
import withRoot from "./Components/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
