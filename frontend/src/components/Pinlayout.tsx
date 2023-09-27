import PinNavBar from "./PinNavBar";
import Pin from "./Pin";

function PinLayout() {
  return (
    <>
      <PinNavBar />
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
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pin_container: {
    padding: 0,
    width: "95vw",
    backgroundColor: "white",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "8px",
    justifyContent: "center",
    marginTop: 75,
  },
};

export default PinLayout;
