import {Header} from "./components/header";
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
      </GridItem>
    </Grid>
  );
}

export default App;
