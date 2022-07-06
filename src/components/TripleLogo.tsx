import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import { Triple } from "../styles/LogoStyle";

const TripleLogo = () => {
  const [opacity, translateY] = useFadeIn();
  return (
    <div>
      <Triple opacity={opacity} translateY={translateY}>
        2021년 12월 기준
      </Triple>
    </div>
  );
};

export default TripleLogo;
