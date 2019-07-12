import React from 'react'
import projects from '../assets/projects'

const Project = () => (
  <div>
    {
      projects.map((project, i) => (
        <div key={ i }>
          <h3>
            {
              project.name
            }
          </h3>
          <div>
            <a href={ project.link }>View Project</a>
            <a href={ project.code }>View Code</a>
          </div>
          <div>
            <p>
              {
                project.description
              }
            </p>
          </div>
        </div>
      ))
    }
  </div>
)

export default Project
