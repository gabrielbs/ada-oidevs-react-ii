import {Feed} from "../components/feed";
import {Header} from "../components/header";
import {Highlights} from "../components/highlights/highlights";
import {Navbar} from "../components/navbar";
import {Grid, GridItem} from "../ui/grid";

export const Home = (props) => (
  <Grid>
    <GridItem>
      <Navbar onClickLoginButton={props.onClickLoginButton} />
    </GridItem>
    <GridItem>
      <Header />
      <Highlights />
      <Feed />
    </GridItem>
  </Grid>
);
