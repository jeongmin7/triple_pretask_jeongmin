import { useEffect, useState } from "react";

const easeOutExpo = (t: number) => {
  // t:  0 (움직임의 시작)에서 1 (움직임의 끝) 사이의 움직임 진척도
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};
const useCountUp = (end: number, current = 0, duration = 2000) => {
  const [count, setCount] = useState(current);
  const frameRate = 1000 / 60; //1초에  60프레임
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    const counter = setInterval(() => {
      current++;
      const progress = easeOutExpo(current / totalFrame);
      setCount(Math.round(end * progress));
      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);

    //setInvertal(함수, 지연시간)
  }, [end, frameRate, current, totalFrame]);

  return count;
};

export default useCountUp;
