import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Certifications from './Certifications'
import Articles from './Articles'
import Other from './Other'

const App = () => (
  <div className="container mt-3 mb-3">
    <Header />
    <Projects />
    <Certifications />
    <Articles />
    <Other />
  </div>
)

export default App
