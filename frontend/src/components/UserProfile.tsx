import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useUser } from "../api/user";

function UserProfile() {
  const [user] = useUser();

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{user ? user.name : "익명"}</Card.Title>
              <Card.Text>@{user ? user.id : "anonymous"}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Email: useremail@example.com</ListGroup.Item>
                <ListGroup.Item>Phone: 123-456-7890</ListGroup.Item>
                <ListGroup.Item>
                  Address: 123 Main St, Anytown USA
                </ListGroup.Item>
              </ListGroup>
              <Button>Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
