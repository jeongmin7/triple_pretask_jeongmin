import React from "react";
import useCountUp from "../hooks/useCountUp";
import { MetricContainer, MetricItem, Strong } from "../styles/styles";
const Metric: React.FC = () => {
  const userCount = useCountUp(700);
  const reviewCount = useCountUp(100);
  const planCount = useCountUp(470);
  return (
    <MetricContainer>
      <MetricItem>
        <Strong>
          <span>{userCount}</span>만 명
        </Strong>
        의 여행자 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>{reviewCount}</span>만 개
        </Strong>
        의 여행 리뷰 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>{planCount}</span>만 개
        </Strong>
        의 여행 일정 <br />
      </MetricItem>
    </MetricContainer>
  );
};

export default Metric;
