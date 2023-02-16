import {Feed} from "../components/feed";
import {Header} from "../components/header";
import {Highlights} from "../components/highlights/highlights";
import {Navbar} from "../components/navbar";
import {Grid, GridItem} from "../ui/grid";

export const Home = () => (
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
