import React from "react";
import Awards from "./components/Awards";
import Metric from "./components/Metric";
import TripleLogo from "./components/TripleLogo";
import GlobalStyles from "./styles/GlobalStyle";
import styled from "styled-components";

const ResponsiveSection = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: block;
  justify-content: center;
  position: relative;
  width: 1040px;
  height: 412px;
`;

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
