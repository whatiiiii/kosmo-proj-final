import React from "react";
import Pin from "./Pin";

function Pinlayout() {
  return (
    <div style={styles.pin_container}>
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="large" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="medium" />
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    paading: 0,
    width: "80vw",
    backgroundColor: "black",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
  },
};

export default Pinlayout;
