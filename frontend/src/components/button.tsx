import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Buttonfriend() {
  return (
    <Button variant="primary" onClick={() => console.log("안녕")}>
      난 버튼
    </Button>
  );
}
export default Buttonfriend;
