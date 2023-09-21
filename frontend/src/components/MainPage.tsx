import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function MainPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <>
      <Button variant="danger" onClick={handleShowLogin}>
        Login
      </Button>

      <Button variant="secondary" onClick={handleShowSignup}>
        Sign up
      </Button>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Pinterest에 오신 것을 환영합니다!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="test"
            />
            <label htmlFor="floatingInputCustom">ID</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="pass"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button href="/feed" variant="danger" onClick={handleCloseLogin}>
            LOGIN
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">아이디</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">비밀번호</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="text"
            />
            <label htmlFor="floatingInputCustom">이름</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="date"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">생년월일</label>
          </Form.Floating>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="danger" onClick={handleCloseSignup}>
            LOGIN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MainPage;
