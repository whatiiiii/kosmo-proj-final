import PinNavBar from "./PinNavBar";
import Pin from "./Pin";
import { useFeed } from "../api/feed";
import { Button, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useQueryClient } from "@tanstack/react-query";

interface PinLayoutProps {
  hideNavBar?: boolean;
  username?: string;
  type?: "created" | "saved" | "search" | "undefined";
}

function PinLayout({ hideNavBar, username, type }: PinLayoutProps) {
  const [currentType, setCurrentType] = useState(type);
  const navigate = useNavigate();
  const { inputValue } = useParams();

  const handleInputValueChange = (value: string) => {
    setCurrentType("search");
    if (value !== "") {
      navigate(`/pins/search/pinSearch/${value}`);
    }
  };

  const { status, error, data, fetchNextPage } = useFeed(
    username,
    inputValue,
    currentType,
  );
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
      {!hideNavBar && <PinNavBar onInputValueChange={handleInputValueChange} />}
      <div style={{ paddingTop: "55px" }}>
        {!data.pages[0] ? (
          <Typography align="center" sx={{ marginTop: "20px" }}>
            해당하는 핀이 없습니다.
          </Typography>
        ) : (
          <div style={styles.pin_container}>
            {data.pages.map((src, i) => (
              <Pin key={i} src={src} pinSeq={data.pageParams[i] as number} />
            ))}
            <div ref={ref}></div>
          </div>
        )}
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
    marginTop: 20,
  },
};

export default PinLayout;
