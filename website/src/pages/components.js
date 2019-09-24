import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../system/theme";
import {
  Box,
  Heading,
  Button,
  Text,
  Img,
  themeGet,
  Flex,
  Link,
} from "../system/base";
import LiveExample from "./components/LiveExample";

const Global = createGlobalStyle`
  body {
    background: ${themeGet("colors.gray.200")};
  }
`;

const data = [
  {
    name: "Box",
    scope: { Box },
    code: `<Box
  width="20"
  height="20"
  borderRadius="normal"
  boxShadow="normal"
  bg="pink.400"
></Box>`,
  },
  {
    name: "Text",
    scope: { Text },
    code: `<>
  <Text mb="2">
    Culpa sunt id tempor ullamco duis. Sit in irure culpa cillum nulla do
    sunt mollit tempor laborum enim eiusmod culpa. Nostrud non culpa mollit
    dolore aliqua ullamco ut.
  </Text>
  <Text fontFamily="serif" fontStyle="italic" mb="2" lineHeight="snug">
    Eiusmod irure voluptate ipsum nostrud irure Lorem ad ipsum et velit
    sunt. Occaecat id labore cupidatat et id. Ad esse deserunt velit irure
    pariatur nisi anim sit amet.
    </Text>
    <Text fontFamily="mono">Nisi ullamco aute non laborum sint ad.</Text>
    </>`,
  },
  {
    name: "Heading",
    scope: { Heading },
    code: `<>
  <Heading fontFamily="sans" fontSize="3xl" fontWeight="thin" mb="3">
    Example Heading One
  </Heading>
  <Heading fontFamily="serif" fontSize="3xl" letterSpacing="tight" mb="3">
    Example Heading Two
  </Heading>
  <Heading
    fontFamily="mono"
    fontSize="2xl"
    fontWeight="semibold"
    letterSpacing="tight"
    textTransform="uppercase"
    mb="3"
  >
    Example Heading Three
  </Heading>
</>`,
  },
  {
    name: "Img",
    scope: { Img },
    code: `<Img
  width="sm"
  borderRadius="lg"
  src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
/>
`,
  },
  {
    name: "Button",
    scope: { Button },
    code: `<>
  <Button mr="2">Button</Button>
  <Button mr="2" color="white" bg="indigo.600">
    Primary
  </Button>
  <Button mr="2" bg="white" borderWidth="2" borderColor="gray.700">
    Outlined
  </Button>
</>`,
  },
];

const ScrollLink = props => {
  const smoothScroll = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const offsetTop =
      document.getElementById(id).getBoundingClientRect().top +
      window.pageYOffset;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return <Link display="block" {...props} onClick={smoothScroll} />;
};

const StyledScrollLink = styled(ScrollLink)`
  &:hover {
    color: black;
  }
`;

const Sidebar = props => (
  <Box display={["none", "none", "block"]} width={48} {...props}>
    <Box px="5" mt="12" position="fixed">
      {data.map(({ name }) => (
        <StyledScrollLink
          mb="2"
          fontWeight="bold"
          color="gray.700"
          fontSize="xl"
          textDecoration="none"
          px="2"
          borderRadius="normal"
          href={`#${name}`}
        >
          {name}
        </StyledScrollLink>
      ))}
    </Box>
  </Box>
);

const Content = props => (
  <Box
    mx={[5, 10]}
    my="10"
    bg="white"
    maxWidth="3xl"
    borderRadius="normal"
    {...props}
  >
    <Box px={[6, 8, 12]}>
      <Box py="10">
        <Heading lineHeight="none" mb="6" fontSize="5xl">
          Component Playground
        </Heading>
        <Text fontSize="xl">
          This is a playground where you can see examples of the different base
          components provided with styled-system-tailwind.
        </Text>
      </Box>
      {data.map(({ name, scope, code }) => (
        <Box key={name}>
          <Heading as="h2" id={name} color="gray.800" fontSize="3xl" mb="6">
            {name} Component
          </Heading>
          <LiveExample scope={scope} code={code} mb="16" />
          {/* <Box as="hr" mb="12" mx={-10} borderColor="gray.400" /> */}
        </Box>
      ))}
    </Box>
  </Box>
);

const Components = () => (
  <ThemeProvider theme={theme}>
    <Flex>
      <Global />
      <Sidebar />
      <Content />
    </Flex>
  </ThemeProvider>
);

export default Components;
