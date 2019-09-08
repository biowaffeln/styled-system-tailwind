import React from "react";
import { Box, Heading, Text, Button } from "../system/base";

const Hero = () => (
  <Box pt="10" pb="16" px="8">
    <Box textAlign="left" color="gray.900" maxWidth="lg" mx="auto">
      <Heading fontSize={["3xl", "4xl"]}>
        Hi! Welcome to Styled-System-Tailwind.
      </Heading>
      <Text mt="4" color="gray.700" fontSize={["xl", "2xl"]}>
        A Tailwind-like configuration for styled-system. Create custom,
        responsive websites with ease!
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
  </Box>
);

export default Hero;
