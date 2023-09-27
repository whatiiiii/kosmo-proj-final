import PinNavBar from "./PinNavBar";

function MakePin() {
  return (
    <>
      <PinNavBar />
      <div style={styles.mainscreen}>
        <div>
          <div style={styles.startmainscreen}>
            <div style={styles.fileupscreen}>
              <div style={styles.searchbar}>
                <div style={styles.searchbutton}></div>
                <div style={styles.searchbutton2}>
                  <button style={styles.scrollbutton}>
                    <span>선택</span>
                  </button>
                  <button style={styles.scrollbutton2}>
                    <span color="white">저장</span>
                  </button>
                </div>
              </div>
              <div style={styles.fileupload}>
                <div style={styles.fileupload2}>
                  <div style={styles.fileupload3}>
                    <input
                      aria-label="파일 업로드"
                      id="media-upload-input-5d6df17c-e614-4193-9f8c-6ca3ea8c0a82"
                      data-test-id="media-upload-input-5d6df17c-e614-4193-9f8c-6ca3ea8c0a82"
                      type="file"
                      accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                      aria-hidden="false"
                      tabIndex={0}
                      style={styles.fileupstyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const styles: Record<string, React.CSSProperties> = {
  mainscreen: {
    paddingTop: 55.972,
    boxSizing: "border-box",
    display: "block",
  },
  startmainscreen: {
    top: 55.972,
    boxSizing: "border-box",
    display: "flex",
    backgroundColor: "lightgray",
    position: "fixed",
    flexDirection: "column",
    left: "0",
    bottom: "0",
    right: "0",
    padding: 100,
    alignItems: "center",
  },
  fileupscreen: {
    textAlign: "center",
    boxSizing: "border-box",
    position: "relative",
    flexDirection: "column",
    display: "flex",
    height: 700,
    backgroundColor: "white",
    borderRadius: 16,
    width: 900,
    justifyContent: "center",
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  searchbar: {
    marginBottom: 15,
    boxSizing: "border-box",
    display: "flex",
  },
  searchbutton: {
    minWidth: 310,
    minHeight: 40,
    alignItems: "center",
    margin: 0,
    display: "flex",
  },
  searchbutton2: {
    minWidth: 510,
    minHeight: 40,
    alignItems: "center",
    margin: 0,
    display: "flex",
    paddingLeft: 250,
  },
  scrollbutton: {
    alignItems: "center",
    backgroundColor: "rgb(239, 239, 239)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexGrow: 1,
    height: 40,
    justifyContent: "spaceBetween",
    minWidth: 0,
    width: 100,
    outline: 0,
    padding: "0px 0px 0px 14px",
    position: "relative",
    borderRadius: "8px 0px 0px 8px",
    pointerEvents: "auto",
  },
  scrollbutton2: {
    backgroundColor: "rgb(230, 0, 35)",
    border: "none",
    cursor: "pointer",
    flex: "0 0 auto",
    height: "40px",
    width: 60,
    outline: "0px",
    padding: "0px 14px",
    borderRadius: "0px 8px 8px 0px",
    pointerEvents: "auto",
  },
  fileupload: {
    paddingBottom: 40,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: "100%",
  },
  fileupload2: {
    boxSizing: "border-box",
    display: "block",
    width: 300,
    height: "100%",
    flex: "1 1 auto",
  },
  fileupload3: {
    backgroundColor: "rgb(239, 239, 239)",
    boxShadow: "none",
    height: "100%",
    borderRadius: 8,
    boxSizing: "border-box",
    display: "block",
    position: "relative",
  },
  fileupstyle: {
    cursor: "pointer",
    height: "100%",
    opacity: 0,
    position: "static",
    width: "100%",
    left: 0,
    top: 0,
    fontSize: 0,
  },
};

export default MakePin;
