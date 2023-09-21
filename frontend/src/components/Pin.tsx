import img1 from "/imggg/img1.png";
import img2 from "/imggg/img2.png";
import { useEffect, useState } from "react";

const backgroundArray = [img1, img2];
const sizeArray = ["small", "medium", "large"];

function Pin() {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * backgroundArray.length));
  }, []);
  const [randomIndex2, setRandomIndex2] = useState(0);
  useEffect(() => {
    setRandomIndex2(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const backgroundImg = backgroundArray[randomIndex];
  const size = sizeArray[randomIndex2];
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[size],
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
      }}
    ></div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "20px",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default Pin;
