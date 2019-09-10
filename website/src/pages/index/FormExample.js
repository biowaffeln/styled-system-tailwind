import React from "react";
import { Flex, Box, Link, Heading } from "../../system/base";
import Form from "./Form";

const FormExample = () => (
  <Box bg="gray.800">
    <Flex
      maxWidth="3xl"
      py="12"
      px={["8", "4"]}
      mx="auto"
      flexDirection={["column", "row-reverse"]}
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        width={["full", 1 / 2]}
        maxWidth="sm"
        mb={["6", "0"]}
        px={["0", "10"]}
        pb={["0", "16"]}
      >
        <Heading mb="2" as="h2" fontSize="3xl" color="gray.100">
          Form Example
        </Heading>
        <Link href="#" color="gray.400">
          Tailwind Version
        </Link>
        <Link href="#" textDecoration="underline" color="gray.400">
          Styled-System-Tailwind Version
        </Link>
      </Flex>
      <Box width={["full", 1 / 2]} maxWidth="sm" mr={["0", "6"]}>
        <Form />
      </Box>
    </Flex>
  </Box>
);

export default FormExample;
