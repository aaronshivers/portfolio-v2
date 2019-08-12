import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import articles from '../assets/articles'

const Article = () => (

  <Accordion
    defaultActiveKey="0"
    className="mb-3 border-bottom"
  >
    <Card>
      <Card.Header className="text-center">
        <Accordion.Toggle
          as={ Button }
          variant="link"
          eventKey="0"
        >
          View Articles
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <ListGroup variant="flush">
            {
              articles.map((certification, i) => (
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

export default Article
