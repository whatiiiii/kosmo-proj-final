import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const sizeArray = ["small", "medium", "large"];

function Pin({ src }: { src?: string }) {
  if (src === undefined) {
    src = "https://placehold.co/600x400?text=Error";
  }

  const navigate = useNavigate();
  const goPin = () => {
    navigate("/pin-builder");
  };
  const [randomIndex2, setRandomIndex2] = useState(0);
  useEffect(() => {
    setRandomIndex2(Math.floor(Math.random() * sizeArray.length));
  }, []);
  const backgroundImg = src;
  const size = sizeArray[randomIndex2];
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[size],
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={goPin}
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
