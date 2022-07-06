import React from "react";
import useCountUp from "../hooks/useCountUp";
import useFadeIn from "../hooks/useFadeIn";
import { MetricContainer, MetricItem, Strong } from "../styles/MetricStyle";
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
