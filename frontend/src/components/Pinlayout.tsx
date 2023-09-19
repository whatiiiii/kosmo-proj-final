import Pin from "./Pin";
import { useEffect, useState } from "react";

const sizeArray = ["small", "medium", "large"];

function Pinlayout() {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const sizeArr1 = sizeArray[randomIndex];
  const [randomIndex2, setRandomIndex2] = useState(0);
  useEffect(() => {
    setRandomIndex2(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const sizeArr2 = sizeArray[randomIndex2];
  const [randomIndex3, setRandomIndex3] = useState(0);
  useEffect(() => {
    setRandomIndex3(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const sizeArr3 = sizeArray[randomIndex3];
  const [randomIndex4, setRandomIndex4] = useState(0);
  useEffect(() => {
    setRandomIndex4(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const sizeArr4 = sizeArray[randomIndex4];
  const [randomIndex5, setRandomIndex5] = useState(0);
  useEffect(() => {
    setRandomIndex5(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const sizeArr5 = sizeArray[randomIndex5];
  return (
    <div style={styles.pin_container}>
      <Pin size={sizeArr1} />
      <Pin size={sizeArr2} />
      <Pin size={sizeArr3} />
      <Pin size={sizeArr4} />
      <Pin size={sizeArr5} />
      <Pin size={sizeArr1} />
      <Pin size={sizeArr2} />
      <Pin size={sizeArr3} />
      <Pin size={sizeArr4} />
      <Pin size={sizeArr5} />
      <Pin size={sizeArr1} />
      <Pin size={sizeArr2} />
      <Pin size={sizeArr3} />
      <Pin size={sizeArr4} />
      <Pin size={sizeArr5} />
      <Pin size={sizeArr1} />
      <Pin size={sizeArr2} />
      <Pin size={sizeArr3} />
      <Pin size={sizeArr4} />
      <Pin size={sizeArr5} />
      <Pin size={sizeArr1} />
      <Pin size={sizeArr2} />
      <Pin size={sizeArr3} />
      <Pin size={sizeArr4} />
      <Pin size={sizeArr5} />
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    paading: 0,
    width: "110vw",
    backgroundColor: "black",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
    size: sizeArray,
  },
};

export default Pinlayout;
