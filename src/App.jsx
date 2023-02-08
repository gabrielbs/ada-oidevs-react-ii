import React, {useEffect} from "react";
import {Header} from "./components/header";
import {Highlights} from "./components/highlights/highlights";
import {Navbar} from "./components/navbar";
import {fetcher} from "./services";
import {Grid, GridItem} from "./ui/grid";

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [text, setText] = React.useState();

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher("photos");
      setPhotos(response);
    };

    makeRequest();
  }, []);

  /**
   * useMemo Example
   */
  const allSmallPhotosMemoized = React.useMemo(() => {
    console.log("calling memoized function");
    return photos.map((item) => item.urls.small);
  }, [photos]);

  const allSmallPhotosNOTMemoized = () => {
    // console.log("calling NOT memoized function");
    return photos.map((item) => item.urls.small);
  };

  console.log(allSmallPhotosMemoized);
  allSmallPhotosNOTMemoized();
  // End useMemo Example

  /**
   * useCallback Example
   */

  const onChangeHandler = React.useCallback(
    (e) => {
      console.log("chamando set Text");
      console.log(photos);
      setText(e.currentTarget.value);
      return "bla";
    },
    [photos]
  );

  console.log(onChangeHandler); // só uma função de callback, sem um retorno, apesar de retornar "bla"

  const onChangeHandlerWithoutCallback = (e) => {
    console.log("chamando set Text");
    console.log(photos);
    setText(e.currentTarget.value);
  };

  // exemplo para buscar imagens ao clicar no botão
  const searchImages = React.useCallback(async () => {
    console.log("text text");
    const response = await fetcher("photos");
    setPhotos(response);
  }, [text]);
  // end useCallback example

  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <input
          placeholder="INPUT PARA RERENDERIZAR"
          onChange={onChangeHandler}
          style={{
            width: "90%",
            height: 50,
            border: "1px red solid",
            fontSize: 28,
          }}
        />
        <Header imageNames={allSmallPhotosMemoized} />
        <Highlights />
        <button
          style={{
            width: "90%",
            height: 50,
            border: "1px red solid",
            fontSize: 28,
          }}
          onClick={searchImages}
        >
          BUSCAR IMAGENS
        </button>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.urls.small} />
        ))}
      </GridItem>
    </Grid>
  );
}

export default App;
