import styled from "styled-components";
import {Text} from "../../ui/text";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 40px 0;
`;

export const HighlighItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100px;
`;

export const HighlightText = styled(Text)`
  margin-top: 12px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;
