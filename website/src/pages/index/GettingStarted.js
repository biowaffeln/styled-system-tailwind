import React from "react";
import { Box, Heading, Text, Link } from "../../system/base";

const GettingStarted = () => (
  <Box pt="12" px="8" pb="20">
    <Box textAlign="center" color="gray.900" maxWidth="md" mx="auto">
      <Heading as="h2" id="getStarted" fontSize={["2xl", "3xl"]} mb="6">
        add styled-system-tailwind to your project by running:
      </Heading>
      <Text
        textAlign={["left", "center"]}
        maxWidth={["sm", "full"]}
        color="white"
        borderRadius="normal"
        bg="gray.800"
        py="2"
        px="4"
        mx="auto"
        mb="10"
        boxShadow="md"
        fontSize={["md", "lg"]}
        fontFamily="mono"
      >
        npm init styled-system-tailwind
      </Text>
      <Heading fontSize="xl" color="gray.800" as="h3" mb="4">
        or check out the following links:
      </Heading>
      <Link display="block">Github Project Page</Link>
      <Link display="block" href="https://styled-system.com/">
        Styled System Documentation
      </Link>
      <Link display="block" href="https://tailwindcss.com/">
        Tailwind Documentation
      </Link>
    </Box>
  </Box>
);

export default GettingStarted;
