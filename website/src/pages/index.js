import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../system/theme";
import Hero from "../components/Hero";
import CardExample from "../components/CardExample";
import FormExample from "../components/FormExample";
import GettingStarted from "../components/GettingStarted";
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
