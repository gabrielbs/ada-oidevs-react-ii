import React, {useEffect} from "react";
import {Header} from "./components/header";
import {Highlights} from "./components/highlights/highlights";
import {Navbar} from "./components/navbar";
import {fetcher} from "./services";
import {Grid, GridItem} from "./ui/grid";

function App() {
  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher("photos");
      console.log(response);
    };

    makeRequest();
  }, []);
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
      </GridItem>
    </Grid>
  );
}

export default App;
