import React from "react";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";
import { Box } from "../../system/base";

const LiveExample = ({ scope, code, ...rest }) => (
  <Box boxShadow="md" borderRadius="lg" overflow="hidden" {...rest}>
    <LiveProvider scope={scope} code={code}>
      <Box p="5" bg="white">
        <LivePreview />
      </Box>
      <Box bg="gray.900">
        <LiveEditor style={{ caretColor: "white" }} />
      </Box>
    </LiveProvider>
  </Box>
);

export default LiveExample;
