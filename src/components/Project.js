import React from 'react'
import { Accordion, Card, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'

const Project = ({ index, name, link, code, description }) => (

  <Card>
    <Card.Header className="text-center">
      <Accordion.Toggle
        as={ Button }
        variant="link"
        eventKey={ index }
      >
        { name }
      </Accordion.Toggle>
    </Card.Header>

    <Accordion.Collapse eventKey={ index }>
      <Card.Body>
        <Row>
          <Col className="text-center">
            <a href={ link }>View Project</a>
          </Col>
          <Col className="text-center">
            <a href={ code }>
              <FaGithub />
              <span> View Code</span>
            </a>
          </Col>
        </Row>
        <p className="mt-3">{ description }</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)

export default Project
