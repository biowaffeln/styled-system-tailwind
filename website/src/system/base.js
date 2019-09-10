import styled from "styled-components";
import {
  color,
  space,
  layout,
  typography,
  border,
  shadow,
  flexbox,
  system,
  get,
} from "styled-system";

const utils = system({
  animation: true,
  appearance: true,
  backgroundAttachment: true,
  boxSizing: true,
  cursor: true,
  objectFit: true,
  objectPosition: true,
  overflowX: true,
  overflowY: true,
  pointerEvents: true,
  resize: true,
  textDecoration: true,
  textTransform: true,
  transform: true,
  transformOrigin: true,
  transition: true,
  userSelect: true,
  whiteSpace: true,
});

export const themeGet = (path, fallback = null) => props =>
  get(props.theme, path, fallback);

export const Box = styled.div(
  color,
  space,
  layout,
  typography,
  border,
  shadow,
  utils
);

export const Flex = styled(Box)(
  {
    display: "flex",
  },
  flexbox
);

export const Text = styled(Box)({});

Text.defaultProps = {
  as: "p",
  color: "gray.900",
  fontFamily: "sans",
};

export const Heading = styled(Text)({});

Heading.defaultProps = {
  as: "h1",
  fontWeight: "bold",
  lineHeight: "tight",
};

export const Link = styled(Text)({});

Link.defaultProps = {
  as: "a",
  textDecoration: "underline",
};

export const Img = styled(Box)({});

Img.defaultProps = {
  as: "img",
};

export const Button = styled(Flex)({
  display: "inline-flex",
});

Button.defaultProps = {
  as: "button",
  bg: "gray.300",
  fontWeight: "bold",
  alignItems: "center",
  height: "10",
  px: "4",
  borderRadius: "normal",
};
