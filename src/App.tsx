import React from "react";
import "./App.css";
import Awards from "./components/Awards";
import Metric from "./components/Metric";
import TripleLogo from "./components/TripleLogo";
import {
  MainContainer,
  ContentContainer,
  RightPartContainer,
} from "./styles/styles";

function App() {
  return (
    <div>
      <MainContainer>
        <ContentContainer>
          <TripleLogo />
          <RightPartContainer>
            <Metric />
            <Awards />
          </RightPartContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  );
}

export default App;
