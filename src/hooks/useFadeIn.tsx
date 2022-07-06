import { useEffect, useState } from "react";
export interface FadeInProps {
  opacity: boolean;
  translateY: boolean;
}
const useFadeIn = (): [boolean, boolean] => {
  const [opacity, setOpacity] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<boolean>(false);

  useEffect(() => {
    setOpacity(true);
    setTranslateY(true);
  }, []);
  return [opacity, translateY];
};

export default useFadeIn;
