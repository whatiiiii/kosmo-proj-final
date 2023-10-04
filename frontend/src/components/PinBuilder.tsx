import PinNavBar from "./PinNavBar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./PinBuilder.css";
import img2 from "/imggg/img2.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  height: 750,
  ...theme.typography.body2,
  display: "flex", // 새로운 스타일 추가
  alignItems: "center", // 새로운 스타일 추가
  boxSizing: "border-box", // 새로운 스타일 추가
  //padding: 25,
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function PinBuilder(props: Props) {
  return (
    <>
      <div className="MuiPaper-wrapper">
        <PinNavBar />
        <div className="MuiPaper-root">
          <DemoPaper square={false} elevation={3} sx={{ borderRadius: 5 }}>
            <div className="box1">
              <img className="image-root" src={img2}></img>
            </div>
            <div className="box2">
              <React.Fragment>
                <CssBaseline />
                <Toolbar>
                  <Typography variant="h6">
                    Scroll to elevate App bar
                  </Typography>
                </Toolbar>
                <Container>
                  <ElevationScroll {...props}>
                    <Box sx={{ my: 2, overflow: "auto" }}>
                      {[...new Array(12)]
                        .map(
                          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join("\n")}
                    </Box>
                  </ElevationScroll>
                </Container>
              </React.Fragment>
            </div>
          </DemoPaper>
        </div>
      </div>
    </>
  );
}

export default PinBuilder;
