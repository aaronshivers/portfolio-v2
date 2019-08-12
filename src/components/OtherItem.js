import React, { useState } from 'react'
import { Card, Accordion, Button, ListGroup } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa'

const otherData = [{
  name: 'GitHub',
  link: 'https://github.com/aaronshivers',
  icon: <FaGithub />
}, {
  name: 'LinkedIn',
  link: 'https://www.linkedin.com/in/aaron-shivers/',
  icon: <FaLinkedin />
}, {
  name: 'Resume',
  link: 'https://docs.google.com/document/d/1sPzUb4KdrwGRgepia-hnnaJ3xkJInzlUs6LZ9Fnimoo/edit?usp=sharing',
  icon: <FaFile />
}]

const OtherItem = () => {
  const [ other ] = useState(otherData)

  return (

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
            View Other Items
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ListGroup variant="flush">
              {
                other.map(({ link, icon, name }, i) => {

                  return (
                    <ListGroup.Item key={ i }>
                      <a
                        href={ link }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{ icon }</span> <span>{ name }</span>
                      </a>
                    </ListGroup.Item>
                  )}
                )
              }
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default OtherItem
