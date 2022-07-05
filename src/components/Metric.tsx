import React from "react";
import { MetricContainer, MetricItem, Strong } from "../styles/styles";
const Metric = () => {
  return (
    <MetricContainer>
      <MetricItem>
        <Strong>
          <span>700</span>만 명
        </Strong>
        의 여행자 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>100</span>만 개
        </Strong>
        의 여행 리뷰 <br />
      </MetricItem>
      <MetricItem>
        <Strong>
          <span>470</span>만 개
        </Strong>
        의 여행 일정 <br />
      </MetricItem>
    </MetricContainer>
  );
};

export default Metric;
