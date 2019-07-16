import React from 'react'
import other from '../assets/other'

const OtherItem = () => (

  <div className="accordion mb-3 border-bottom">
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0 text-center">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOthers"
          >
            View Other Items
          </button>
        </h2>
      </div>

      <div id="collapseOthers" className="collapse">
        <div className="list-group">
          <div className="list-group">
            {
              other.map((other, i) => (
                <a
                  className="list-group-item list-group-item-action border-right-0 border-left-0"
                  key={ i }
                  href={ other.link }
                  target="_blank"
                  rel="noreferrer"
                >
                  { other.name }
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default OtherItem
