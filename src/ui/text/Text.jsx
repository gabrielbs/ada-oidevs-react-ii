import * as S from "./styles";

export const Text = (props) => {
  return <S.TextWrapper {...props}>{props.children}</S.TextWrapper>;
};
