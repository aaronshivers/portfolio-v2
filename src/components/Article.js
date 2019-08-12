import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Article = ({ link, name }) => (

  <ListGroup.Item>
    <a
      href={ link }
      target="_blank"
      rel="noreferrer"
    >
      { name }
    </a>
  </ListGroup.Item>
)

export default Article
