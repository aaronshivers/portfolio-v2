import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import Article from './Article'
import articles from '../assets/articles'

const Articles = () => (
  <div>
    <h2 className="text-center">Articles</h2>
    <Accordion className="mb-3 border-bottom">
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
                articles.map((article, i) => (
                  <Article key={ i } { ...article } />
                ))
              }
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
)

export default Articles
