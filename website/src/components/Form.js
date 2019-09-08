import React from "react";
import { Box, Text, themeGet, Flex } from "../system/base";
import styled from "styled-components";

/* --- Helper Components --- */

/* Label */

const Label = props => (
  <Text
    as="label"
    display="block"
    color="gray.700"
    fontSize="sm"
    fontWeight="bold"
    mb="2"
    {...props}
  />
);

/* Input */

const Input = styled(Box)`
  transition: all 0.2s;
  appearance: none;
  &:focus {
    outline: none;
    box-shadow: ${themeGet("shadows.outline")};
  }
`;

Input.defaultProps = {
  as: "input",
  boxShadow: "normal",
  borderRadius: "normal",
  width: "full",
  py: "2",
  px: "3",
  color: "gray.700",
  lineHeight: "tight",
  borderWidth: "1",
  type: "text",
};

/* Button */

const Button = styled(Box)`
  transition: all 0.2s;
  &:focus {
    outline: none;
    box-shadow: ${themeGet("shadows.outline")};
  }
  &:hover {
    background-color: ${themeGet("colors.blue.700")};
  }
`;

Button.defaultProps = {
  as: "button",
  bg: "blue.500",
  color: "white",
  fontWeight: "bold",
  py: "2",
  px: "4",
  borderRadius: "normal",
};

/* FormLink */

const FormLink = styled(Text)`
  transition: color 0.2s;
  &:hover {
    color: ${themeGet("colors.blue.700")};
  }
`;

FormLink.defaultProps = {
  as: "a",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "sm",
  color: "blue.500",
};

/* --- Form Component --- */

const Form = () => (
  <Box width="full" maxWidth="sm">
    <Box
      as="form"
      bg="white"
      boxShadow="md"
      borderRadius="normal"
      px="8"
      pt="6"
      pb="8"
      mb="4"
    >
      <Box mb="4">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Username" />
      </Box>
      <Box mb="6">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          borderColor="red.500"
          placeholder="******************"
          mb="3"
        />
        <Text color="red.500" fontSize="xs" fontStyle="italic">
          Please choose a password.
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Button type="button">Sign in</Button>
        <FormLink href="#">Forgot Password?</FormLink>
      </Flex>
    </Box>
    <Text textAlign="center" color="gray.500" fontSize="xs">
      &copy;2019 Acme Corp. All rights reserved.
    </Text>
  </Box>
);

export default Form;
