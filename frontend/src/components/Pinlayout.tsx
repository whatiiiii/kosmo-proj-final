import Pin from "./Pin";

function PinLayout() {
  return (
    <div style={styles.pin_container}>
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
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
    width: "100vw",
    backgroundColor: "white",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "8px",
    justifyContent: "center",
  },
};

export default PinLayout;
