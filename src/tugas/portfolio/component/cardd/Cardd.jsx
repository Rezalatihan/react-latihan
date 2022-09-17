import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Cardd() {
  return (
    <Row xs={1} md={4} className="m-1">
      <Col>
        <Card>
          <Card.Img variant="top" src="css.png" />
          <Card.Body>
            <Card.Title>css</Card.Title>
            <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src="git.png" />
          <Card.Body>
            <Card.Title>Git</Card.Title>
            <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src="klipartz.com.png" />
          <Card.Body>
            <Card.Title>HTML</Card.Title>
            <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src="React.png" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cardd;
