import PinNavBar from "./PinNavBar";
import Pin from "./Pin";
import { useFeed } from "../api/feed";
import { Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function PinLayout() {
  const { status, error, data, fetchNextPage } = useFeed();
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage().catch((e) => {
        console.error(e);
      });
    }
  }, [inView, fetchNextPage, data]);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <PinNavBar />

      <div style={styles.pin_container}>
        {data.pages.map((src, i) => (
          <Pin key={i} src={src} />
        ))}
        <div ref={ref}></div>
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
