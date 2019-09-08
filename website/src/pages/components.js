import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../system/theme";
import { Box, Heading, Button, Text, Img } from "../system/base";

const SectionHeading = props => <Heading as="h2" fontSize="2xl" {...props} />;

const Components = () => (
  <ThemeProvider theme={theme}>
    <Box maxWidth="2xl" mx="auto">
      <SectionHeading>Box</SectionHeading>
      <Box
        width="20"
        height="20"
        borderRadius="normal"
        boxShadow="normal"
        bg="pink.400"
      ></Box>
      <SectionHeading>Text</SectionHeading>
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
      <SectionHeading>Heading</SectionHeading>
      <Heading fontFamily="sans" fontSize="3xl" fontWeight="thin">
        Example Heading One
      </Heading>
      <Heading fontFamily="serif" fontSize="3xl" letterSpacing="tight">
        Example Heading Two
      </Heading>
      <Heading
        fontFamily="mono"
        fontSize="2xl"
        fontWeight="semibold"
        letterSpacing="tight"
        textTransform="uppercase"
      >
        Example Heading Three
      </Heading>
      <SectionHeading>Img</SectionHeading>
      <Img
        width="sm"
        borderRadius="lg"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
      />
      <SectionHeading>Button</SectionHeading>
      <Button mr="2">Button</Button>
      <Button mr="2" color="white" bg="indigo.600">
        Primary
      </Button>
      <Button mr="2" bg="white" borderWidth="2" borderColor="gray.700">
        Outlined
      </Button>
      <SectionHeading>Input</SectionHeading>
    </Box>
  </ThemeProvider>
);

export default Components;
