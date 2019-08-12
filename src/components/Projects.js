import React from 'react'
import { Accordion } from 'react-bootstrap'
import Project from './Project'
import projects from '../assets/projects'

const Projects = () => (
  <div>
    <h3 className="text-center">Projects</h3>
    <Accordion className="mb-3">
      {
        projects.map((project, i) => (
          <Project
            key={ i }
            index={ i }
            { ...project }
          />
        ))
      }
    </Accordion>
  </div>
)

export default Projects
