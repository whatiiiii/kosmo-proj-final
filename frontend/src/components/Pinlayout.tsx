import Pin from "./Pin";

function Pinlayout() {
  return (
    <div style={styles.pin_container}>
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "110vw",
    backgroundColor: "black",
    position: "absolute",
    left: "53%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
  },
};

export default Pinlayout;
