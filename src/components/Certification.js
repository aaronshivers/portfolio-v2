import React from 'react'
import certifications from '../assets/certifications'

const Certification = () => (
  <div>
    {
      certifications.map((certification, i) => (
        <div key={ i }>
          <a href={ certification.link }>
            {
              certification.name
            }
          </a>
        </div>
      ))
    }
  </div>
)

export default Certification
