import {Text} from "../text";
import * as S from "./styles";

export const Button = (props) => {
  return (
    <S.Wrapper>
      <Text>{props.children}</Text>
    </S.Wrapper>
  );
};
