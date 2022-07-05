import styled from "styled-components";
import { APPSTORE, PLAYSTORE, TRIPLE_LOGO } from "../images";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;
export const ContentContainer = styled.div`
  display: block;
  justify-content: center;
  position: relative;
  width: 1040px;
  height: 412px;
`;
export const RightPartContainer = styled.div`
  display: block;
  width: 100%;
`;

export const Triple = styled.div`
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
`;
export const AwardsContainer = styled.div`
  display: block;
  margin: 50px 0px 140px 623px;
`;
export const PlayStoreAwards = styled.div`
  height: 54px;
  background-image: url(${PLAYSTORE});
  background-repeat: no-repeat;
  background-size: 54px 54px;
  background-position: left top;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
`;
export const AppStoreAwards = styled(PlayStoreAwards)`
  background-image: url(${APPSTORE});
  margin-right: 0;
`;

export const MetricContainer = styled.div`
  padding-top: 150px;
  display: block;
  margin-left: 623px;
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
