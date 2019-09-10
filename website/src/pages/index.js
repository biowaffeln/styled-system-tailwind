import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../system/theme";
import Hero from "./index/Hero";
import CardExample from "./index/CardExample";
import FormExample from "./index/FormExample";
import GettingStarted from "./index/GettingStarted";
import SEO from "../components/seo";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" />
      <Hero />
      <CardExample />
      <FormExample />
      <GettingStarted />
    </>
  </ThemeProvider>
);

export default App;
