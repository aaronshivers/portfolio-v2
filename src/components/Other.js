import React from 'react'
import other from '../assets/other'

const Other = () => (
  <div>
    <h2>Other</h2>
    {
      other.map((other, i) => (
        <div key={ i }>
          <a href={ other.link }>
            {
              other.name
            }
          </a>
        </div>
      ))
    }
  </div>
)

export default Other
