import React from "react";
import { Flex, Box, Link, Heading } from "../../system/base";
import Card from "./Card";

const CardExample = () => (
  <Box bg="gray.200">
    <Flex
      maxWidth="3xl"
      py="12"
      px={["8", "4"]}
      mx="auto"
      flexDirection={["column", "row"]}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        width={["full", 1 / 2]}
        maxWidth="sm"
        mb={["6", "0"]}
        px={["0", "10"]}
        mr={["0", "6"]}
      >
        <Heading mb="2" as="h2" fontSize="3xl">
          Card Example
        </Heading>
        <Link href="#" color="gray.700">
          Tailwind Version
        </Link>
        <Link href="#" textDecoration="underline" color="gray.700">
          Styled-System-Tailwind Version
        </Link>
      </Flex>
      <Box width={["full", 1 / 2]} maxWidth="sm">
        <Card />
      </Box>
    </Flex>
  </Box>
);

export default CardExample;
