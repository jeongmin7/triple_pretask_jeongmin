import React from "react";
import useCountUp from "../hooks/useCountUp";
import useFadeIn from "../hooks/useFadeIn";
import { FadeInProps } from "../hooks/useFadeIn";
import styled from "styled-components";
const MetricContainer = styled.div<FadeInProps>`
  padding-top: 150px;
  display: block;
  margin-left: 623px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.translateY ? "0px" : "20px")});
  transition: all 700ms ease-out 100ms;
`;
const MetricItem = styled.div`
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;

const Strong = styled.span`
  font-weight: bold;
`;

const Metric: React.FC = () => {
  const [opacity, translateY] = useFadeIn();
  const userNumber = useCountUp(0, 700);
  const reviewNumber = useCountUp(0, 100);
  const planNumber = useCountUp(0, 470);
  return (
    <MetricContainer opacity={opacity} translateY={translateY}>
      <MetricItem>
        <Strong>
          <span>{userNumber}</span>만 명
        </Strong>
        의 여행자 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>{reviewNumber}</span>만 개
        </Strong>
        의 여행 리뷰 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>{planNumber}</span>만 개
        </Strong>
        의 여행 일정 <br />
      </MetricItem>
    </MetricContainer>
  );
};

export default Metric;
