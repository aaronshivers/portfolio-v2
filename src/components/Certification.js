import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import certifications from '../assets/certifications'

const Certification = () => (

  <Accordion className="mb-3 border-bottom">
    <Card>
      <Card.Header className="text-center">
        <Accordion.Toggle
          as={ Button }
          variant="link"
          eventKey="0"
        >
          View Certifications
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <ListGroup variant="flush">
            {
              certifications.map((certification, i) => (
                <ListGroup.Item key={ i }>
                  <a
                    href={ certification.link }
                    target="_blank"
                    rel="noreferrer"
                  >
                    { certification.name }
                  </a>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

export default Certification
