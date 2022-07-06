import { FadeInProps } from "../hooks/useFadeIn";
import styled from "styled-components";
export const MetricContainer = styled.div<FadeInProps>`
  padding-top: 150px;
  display: block;
  margin-left: 623px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.translateY ? "0px" : "20px")});
  transition: 700ms ease-out 100ms;
`;
export const MetricItem = styled.div`
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;

export const Strong = styled.span`
  font-weight: bold;
`;
