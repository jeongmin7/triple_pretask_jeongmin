import { FadeInProps } from "../hooks/useFadeIn";
import styled from "styled-components";
import { APPSTORE, PLAYSTORE } from "../assets/images";
export const AwardsContainer = styled.div<FadeInProps>`
  display: block;
  margin: 50px 0px 140px 623px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.translateY ? "0px" : "20px")});
  transition: all 700ms ease-out 200ms;
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
