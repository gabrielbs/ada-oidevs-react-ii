import React from "react";
import {Avatar} from "../avatar";
import * as S from "./styles";

const highlightList = [
  {
    image: "https://via.placeholder.com/90",
    text: "Parceiros",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Desafios",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Comunidade",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Faculdades",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Modelo Educacional",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "",
  },
  {
    image: "https://via.placeholder.com/90",
    text: undefined,
  },
];

const extractTextStrings = (item) => {
  if (!item.text) return "NONE";
  return item.text;
};

export const removeInvalidValues = (item) => {
  if (item === "NONE") {
    return false;
  } else {
    return true;
  }
};

export const Highlights = () => {
  const normalizeData = (data) =>
    data.map(extractTextStrings).filter(removeInvalidValues);

  React.useEffect(() => {
    const meuArray = normalizeData(highlightList);
    // console.log(meuArray);
  }, []);

  return (
    <S.Wrapper>
      {highlightList.map((highlight, index) => (
        <S.HighlighItem key={index}>
          <Avatar size="small" imagePath={highlight.image} />
          <S.HighlightText>{highlight.text}</S.HighlightText>
        </S.HighlighItem>
      ))}
    </S.Wrapper>
  );
};
