import React from "react";
import { LiveProvider, LivePreview, LiveEditor } from "react-live";
import { Box } from "../../system/base";
import { codeTheme } from "./codeTheme";

const LiveExample = ({ scope, code, ...rest }) => (
  <Box {...rest}>
    <LiveProvider scope={scope} code={code} theme={codeTheme}>
      <Box
        borderRadius="lg"
        borderWidth="1"
        overflow="hidden"
        p="5"
        mb="4"
        bg="gray.100"
      >
        <LivePreview />
      </Box>
      <Box borderRadius="lg" overflow="hidden" bg="gray.900">
        <LiveEditor style={{ caretColor: "white" }} />
      </Box>
    </LiveProvider>
  </Box>
);

export default LiveExample;
