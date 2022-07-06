import React from "react";
import Awards from "./components/Awards";
import Metric from "./components/Metric";
import TripleLogo from "./components/TripleLogo";
import { ResponsiveSection, ContentContainer } from "./styles/ContainerStyle";
import GlobalStyles from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <ResponsiveSection>
        <ContentContainer>
          <TripleLogo />
          <Metric />
          <Awards />
        </ContentContainer>
      </ResponsiveSection>
    </>
  );
};

export default App;
