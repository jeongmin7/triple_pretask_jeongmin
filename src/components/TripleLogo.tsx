import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import { FadeInProps } from "../hooks/useFadeIn";
import styled from "styled-components";
import { TRIPLE_LOGO } from "../assets/images";
const Triple = styled.div<FadeInProps>`
  background-image: url(${TRIPLE_LOGO});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: rgba(58, 58, 58, 0.7);
  display: block;
  position: absolute;
  top: 150px;
  right: 640px;
  bottom: -76px;
  left: 0;
  box-sizing: border-box;
  line-height: 15px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.translateY ? "0px" : "20px")});
  transition: all 700ms ease-out 0ms;
`;

const TripleLogo: React.FC = () => {
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
