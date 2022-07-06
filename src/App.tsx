import React from "react";
import Awards from "./components/Awards";
import Metric from "./components/Metric";
import TripleLogo from "./components/TripleLogo";
import { MainContainer, ContentContainer } from "./styles/ContainerStyle";
import GlobalStyles from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <ContentContainer>
          <TripleLogo />
          <Metric />
          <Awards />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default App;
