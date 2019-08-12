import React from 'react'
import { ListGroup } from 'react-bootstrap'

const OtherItem = ({ link, icon, name }) => (

  <ListGroup.Item>
    <a
      href={ link }
      target="_blank"
      rel="noreferrer"
    >
      <span>{ icon }</span> <span>{ name }</span>
    </a>
  </ListGroup.Item>
)

export default OtherItem
