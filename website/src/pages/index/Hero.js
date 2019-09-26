import React from "react";
import styled from "styled-components";
import { Flex, Box, Heading, Text, Button } from "../../system/base";

const Strong = props => (
  <Box as="strong" color="indigo.600" fontWeight="semibold" {...props} />
);

const Background = styled(Flex)``;

const Hero = () => (
  <Background height="90vh" alignItems="center" justifyContent="center">
    <Box px="8" mb="8" color="gray.900" maxWidth="lg">
      <Heading fontSize={["3xl", "4xl"]}>
        Hi! Welcome to Styled-System-Tailwind.
      </Heading>
      <Text mt="4" color="gray.700" fontSize={["xl", "2xl"]}>
        A <Strong>Tailwind-like</Strong> configuration for{" "}
        <Strong>styled-system</Strong>. Create custom, responsive websites with
        ease!
      </Text>
      <Box mt="8">
        <Button as="a" href="#getStarted" bg="indigo.500" color="white" mr="2">
          Get Started
        </Button>
        <Button
          bg="white"
          borderWidth="2"
          borderColor="gray.500"
          as="a"
          href="#"
        >
          Github
        </Button>
      </Box>
    </Box>
  </Background>
);

export default Hero;
