import {Button} from "../../ui/button";
import {Text, TextLink} from "../../ui/text";
import {Avatar} from "../avatar";
import * as S from "./styles";

export const Header = (props) => {
  return (
    <S.HeaderWrapper>
      <S.AvatarWrapper>
        <Avatar imagePath="https://via.placeholder.com/150" />
      </S.AvatarWrapper>
      <S.Content>
        <S.Data>
          <Text bold>@adatechbr</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
        </S.Data>
        <S.Data>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </S.Data>
        <S.Infos>
          <Text>Ada Tech</Text>
          <Text color="#a8a8a8" bold>
            Educação
          </Text>
          <TextLink href="https://google.com.br" target="_blank">
            Ada. A Nova Educação
          </TextLink>
          <S.Followers>
            <Text size="small">Seguido(a) por lorem, ipsum, dolorsitamet</Text>
          </S.Followers>
        </S.Infos>
      </S.Content>
    </S.HeaderWrapper>
  );
};
