import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Container className="App">
      <h1>Demo</h1>

      <Row>
        <Col>
          <Link to="/patents">
            <Card>
              <Card.Body>
                <Card.Title>Patents <Badge bg="primary">7</Badge></Card.Title>
                <Card.Text>Number of patents printed onto silk</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/entries">
            <Card>
              <Card.Body>
                <Card.Title>Entries <Badge bg="primary">2</Badge></Card.Title>
                <Card.Text>Number of businesses entered by small dogs</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

      </Row>
    </Container>
  );
}

