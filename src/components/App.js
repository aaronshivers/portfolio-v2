import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Projects from './Projects'
import Certifications from './Certifications'
import Articles from './Articles'
import Other from './Other'

const App = () => (
  <Container className="mt-3 mb-3">
    <Header />
    <Projects />
    <Certifications />
    <Articles />
    <Other />
  </Container>
)

export default App
