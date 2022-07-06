import { useEffect, useState } from "react";

const easeOutExpo = (t: number) => {
  // t:  0 (움직임의 시작)에서 1 (움직임의 끝) 사이의 움직임 진척도
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};
const useCountUp = (start = 0, end: number, duration = 2000): number => {
  const [count, setCount] = useState<number>(start);
  const frameDuration = 1000 / 60; //1초에 60 프레임 60 fps

  useEffect(() => {
    let currentFrame = start;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      currentFrame++;
      const progress = easeOutExpo(currentFrame / totalFrames);
      setCount(Math.round(end * progress));

      if (currentFrame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [start, end, duration, frameDuration]);

  return count;
};

export default useCountUp;
