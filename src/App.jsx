import React, {useEffect} from "react";
import {Feed} from "./components/feed";
import {Header} from "./components/header";
import {Highlights} from "./components/highlights/highlights";
import {Navbar} from "./components/navbar";
import {Grid, GridItem} from "./ui/grid";

function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <Feed />
      </GridItem>
    </Grid>
  );
}

export default App;
