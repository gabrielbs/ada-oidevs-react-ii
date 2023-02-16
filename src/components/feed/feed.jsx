import React, {useEffect, useState} from "react";
import {InstaContext} from "../../App";
import {fetcher} from "../../services";
import {Loading} from "../../ui/loading";
import {Text} from "../../ui/text";
import * as S from "./styles";

export const Feed = () => {
  const state = React.useContext(InstaContext);
  console.log(state.meuState);

  // const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher("photos");
        state.meuDispatch({type: "add_photos_user", payload: response});
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    makeRequest();
  }, []);

  const handleImageClick = (imageId) => {
    state.meuDispatch({type: "add_highligh_image", payload: imageId});
    state.meuDispatch({type: "change_current_page", payload: "fullscreen"});
  };

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      {hasError && <Text>Epa, deu ruim</Text>}
      {state.meuState.user.photos.map((item, index) => (
        <S.Item key={index} onClick={() => handleImageClick(item?.id)}>
          <S.Image src={item.urls.small} />
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
