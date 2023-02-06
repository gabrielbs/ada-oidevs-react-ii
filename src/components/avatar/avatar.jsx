import * as S from "./styles";

export const Avatar = (props) => {
  return (
    <S.Wrapper size={props.size}>
      <S.Image src={props.imagePath} />
    </S.Wrapper>
  );
};
