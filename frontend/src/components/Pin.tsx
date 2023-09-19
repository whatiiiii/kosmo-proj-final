import img1 from "/imggg/img1.png";
import img2 from "/imggg/img2.png";
import { useEffect, useState } from "react";

const backgroundArray = [img1, img2];
const sizeArray = ["small", "medium", "large"];

function Pin(props) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * backgroundArray.length));
  }, []);
  const backgroundImg = backgroundArray[randomIndex];
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[props.size],
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
      }}
    ></div>
  );
}

const styles = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
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
