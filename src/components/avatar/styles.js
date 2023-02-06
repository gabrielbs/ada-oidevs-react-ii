import styled from "styled-components";

export const Wrapper = styled.div((props) => {
  return {
    overflow: "hidden",
    borderRadius: "50%",
    ...(props.size === "small" ? smallSize : defaultSize),
  };
});

export const Image = styled.img``;

const defaultSize = {
  width: "150px",
  height: "150px",
};

const smallSize = {
  width: "90px",
  height: "90px",
};
