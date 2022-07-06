import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import {
  AppStoreAwards,
  AwardsContainer,
  PlayStoreAwards,
} from "../styles/AwardsStyle";

const Awards = () => {
  const [opacity, translateY] = useFadeIn();
  return (
    <AwardsContainer opacity={opacity} translateY={translateY}>
      <PlayStoreAwards>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStoreAwards>
      <AppStoreAwards>
        2018 애플 앱스토어 <br />
        오늘의 여행앱 선정
      </AppStoreAwards>
    </AwardsContainer>
  );
};

export default Awards;
