import styled from "styled-components";

export const TextWrapper = styled.div`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "900" : "")};
`;
