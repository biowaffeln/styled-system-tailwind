import React from "react";
import { Box, Img, Heading, Text } from "../../system/base";

/* --- Helper Components --- */

const Tag = props => (
  <Box
    display="inline-block"
    bg="gray.200"
    borderRadius="full"
    px="3"
    py="1"
    fontSize="sm"
    fontWeight="semibold"
    color="gray.700"
    mr="2"
    mb="2"
    {...props}
  />
);

/* --- Card Component --- */

const Card = props => (
  <Box
    bg="white"
    boxShadow="lg"
    maxWidth="sm"
    borderRadius="normal"
    overflow="hidden"
    {...props}
  >
    <Img
      width="full"
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <Box px="6" py="4">
      <Heading as="h2" fontSize="xl" mb="2">
        The Coldest Sunset
      </Heading>
      <Text color="gray.700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </Text>
    </Box>
    <Box px="6" py="4">
      {["photography", "travel", "winter"].map(tagname => (
        <Tag key={tagname}>#{tagname}</Tag>
      ))}
    </Box>
  </Box>
);

export default Card;
