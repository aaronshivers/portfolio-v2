import React from 'react'
import { Accordion, Card, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import projects from '../assets/projects'

const Project = () => (
  <Accordion className="mb-3">
    {
      projects.map(({ name, link, code, description }, i) => (
        <Card key={ i }>
          <Card.Header className="text-center">
            <Accordion.Toggle
              as={ Button }
              variant="link"
              eventKey={ i }
            >
              { name }
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey={ i }>
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
      ))
    }
  </Accordion>
)

export default Project
