import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Buttonfriend() {
  const hello = () => console.log("반가워용");
  const bye = () => console.log("잘가용");
  const [show, setShow] = useState(false);

  const Close = () => setShow(false);
  const Show = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          Show();
          hello();
        }}
      >
        난 버튼
      </Button>

      <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>제목이고</Modal.Title>
        </Modal.Header>
        <Modal.Body>내용이고</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            닫기
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              bye();
              Close();
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Buttonfriend;
