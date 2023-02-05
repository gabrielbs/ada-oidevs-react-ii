import styled from "styled-components";
import {Text} from "../ui/text";

const Wrapper = styled.div`
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Avatar = () => {
  return (
    <Wrapper>
      <img src="https://via.placeholder.com/150" />
    </Wrapper>
  );
};
