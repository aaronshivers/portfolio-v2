import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import Certification from './Certification'
import certifications from '../assets/certifications'

const Certifications = () => (
  <div>
    <h3 className="text-center">Certifications</h3>
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
                  <Certification key={ i } certification={ certification } />
                ))
              }
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
)

export default Certifications
