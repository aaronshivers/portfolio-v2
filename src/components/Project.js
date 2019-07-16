import React from 'react'
import projects from '../assets/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = () => (
  <div className="accordion mb-3" id="accordion">
    {
      projects.map((project, i) => (
        <div className="card" key={ i }>
          <div className="card-header">
            <h2 className="mb-0 text-center">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={ `#collapse${ i }` }
              >
                { project.name }
              </button>
            </h2>
          </div>
          <div
            id={ `collapse${ i }` }
            className="collapse"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="row">
                <a
                  className="col text-center"
                  href={ project.link }
                >
                  View Project
                </a>
                <a
                  className="col text-center"
                  href={ project.code }
                >
                  <FontAwesomeIcon icon={ faGithub } />
                  <span> View Code</span>
                </a>
              </div>
              <p className="mt-3">
                {
                  project.description
                }
              </p>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

export default Project
